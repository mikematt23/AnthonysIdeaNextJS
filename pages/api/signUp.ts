
import type { NextApiRequest, NextApiResponse } from "next";
import {prisma} from "../../lib/prisma";
import bcrypt from 'bcrypt'

export default async function handler(req: NextApiRequest,res:NextApiResponse){
    if(req.method !== "POST"){
        return res.status(405).end(`Method ${req.method} not allowed`)
    }
    try{
        const {email,password,address,city,state} = req.body
        const user = await prisma.user.findUnique({
           where:{
               email: email
            }
        })
        if(user != null){
            res.json({message:"Already A user"})
            throw new Error("user found")
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const createdUser = await prisma.user.create({
            data:{
                email:email,
                address:address,
                city:city,
                password:hashedPassword,
                state:state
            }
        })
        return res.status(200).json({message: createdUser})
    }catch(err){
       console.log(err)
       return res.status(400).json({message:"Already A user"})
    }
}
