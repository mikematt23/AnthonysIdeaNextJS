import type { NextApiRequest, NextApiResponse } from "next"
import {prisma} from "../../lib/prisma"
import { parse } from "cookie";
const jwt = require("jsonwebtoken");
import { PrismaClient } from "@prisma/client";


export default async function handler(req:NextApiRequest, res:NextApiResponse){
    const JWT_SECRET = process.env.JWT_SECRET || "mySecret";
    const cookies = parse(req.headers.cookie || "");
    const token = cookies.token;

     if(req.method !== "GET"){
        return res.status(405).end(`Method ${req.method} not allowed`)
    }

    try{
      const decoded = jwt.verify(token, JWT_SECRET) as { id: number };
      const user = await prisma.user.findUnique({ where: { userId: decoded.id } });

      if (!user) return res.status(404).json({ error: "User not found" });

      res.status(200).json({ message: user });
    }catch{
      return res.status(500).json({message:"error"})
    }
}