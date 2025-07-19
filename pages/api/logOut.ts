import type { NextApiRequest, NextApiResponse } from 'next';
import { serialize } from "cookie";

export default function handler(req:NextApiRequest, res: NextApiResponse){
    if (req.method !== "POST") {
      return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
   const expiredCookie = serialize("token", "", {
    httpOnly: true,
    path: "/",
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    expires: new Date(0), // Delete it
   });

  res.setHeader("Set-Cookie", expiredCookie);
  res.status(200).json({ message: "Logged out" });
}