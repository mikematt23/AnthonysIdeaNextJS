import type { NextApiRequest, NextApiResponse } from 'next';
import {prisma} from "../../lib/prisma";
import bcrypt from "bcrypt"
const jwt = require("jsonwebtoken");
import { serialize } from "cookie";

export default async function handler(req:NextApiRequest, res:NextApiResponse){
    const JWT_SECRET = process.env.JWT_SECRET || "mySecret";
    if(req.method !== "POST"){
        return res.status(405).end(`Method ${req.method} not allowed`)
    }
    const {email, password} = req.body
    try{
        const user = await prisma.user.findUnique({
            where:{
                email: email
            }
        })

        if(user === null) return res.json({message:"no user"})
        
        const match = await bcrypt.compare(password, user.password)
        
        if(!match) return res.status(401).json({message: "no match"})

        const token = jwt.sign({ id: user.userId}, JWT_SECRET, { expiresIn: "1h" });

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
        return res.status(200).json({message:user})
    }catch(err){
      console.log(err)
      return res.status(500).json({message:"error"})
    }
}