/* eslint-disable import/no-anonymous-default-export */
import dbConnect from '../../../db/utils/dbConnect';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();
  const { cookies } = req;

  const jwt = cookies.SiteJWT;

  if (!jwt) {
    return res.json({ message: "Invalid token!" });
  }
  
  return res.json({ data: "Top secret data!" });
}
