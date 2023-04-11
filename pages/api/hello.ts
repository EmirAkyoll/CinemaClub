// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from '../../db/utils/dbConnect'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  await dbConnect();
  res.status(200).json({ name: 'John Doe' })
}
