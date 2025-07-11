
import type { NextApiRequest, NextApiResponse } from "next";
import {prisma} from "../../lib/prisma";
import bcrypt from 'bcrypt'
const jwt = require("jsonwebtoken");
import { serialize } from "cookie";

export default async function handler(req: NextApiRequest,res:NextApiResponse){
    const JWT_SECRET = process.env.JWT_SECRET || "mySecret";
    if(req.method !== "POST"){
        return res.status(405).end(`Method ${req.method} not allowed`)
    }
    try{
        const {email,password,address,city,state, fullName, phone} = req.body
        const user = await prisma.user.findUnique({
           where:{
               email: email
            }
        })
        if(user != null){
            return res.status(400).json({message:"Already A user"})
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const createdUser = await prisma.user.create({
            data:{
                email:email,
                address:address,
                city:city,
                password:hashedPassword,
                state:state,
                fullName:fullName,
                phone:phone
            }
        })
        const token = jwt.sign({ id: createdUser.userId}, JWT_SECRET, { expiresIn: "1h" });

            res.setHeader(
            "Set-Cookie",
            serialize("token", token, {
            httpOnly: true,
            path: "/",
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 3600,
          })
        );
        return res.status(200).json({message: "updated"})
    }catch(err){
       console.log(err)
       return res.status(400).json({message:"Error"})
    }
}
