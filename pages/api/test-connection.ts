import type { NextApiRequest, NextApiResponse } from 'next';
import {prisma} from "../../lib/prisma"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Try to fetch users (or any simple query)
    const users = await prisma.user.findMany();
    res.status(200).json({ success: true, users });
  } catch (error) {
    res.status(500).json({ success: false, error: (error as Error).message });
  }
}