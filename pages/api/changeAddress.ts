import type { NextApiRequest, NextApiResponse } from "next";
import {prisma} from "../../lib/prisma";
import bcrypt from "bcrypt"
const jwt = require("jsonwebtoken");
import { parse } from "cookie";

export default async function handler(req:NextApiRequest, res:NextApiResponse){
    const JWT_SECRET = process.env.JWT_SECRET || "mySecret";
    const cookies = parse(req.headers.cookie || "");
    const token = cookies.token;

    if(req.method !== "POST"){
        return res.status(405).end(`Method ${req.method} not allowed`)
    }
    const {address, city, state} = req.body
    try{
        const decoded = jwt.verify(token, JWT_SECRET) as { id: number };
        const user = await prisma.user.findUnique({ where: { userId: decoded.id } });

        if(user === null) return res.json({message:"no user"})
        
        const updatedUser = await prisma.user.update({
            where:{userId: decoded.id},
            data:{
                city:city,
                state:state,
                address:address
            }
        })    
        return res.status(200).json({message:updatedUser})
    }catch(error){
       return res.status(500).json({message:"error"})
    }
}