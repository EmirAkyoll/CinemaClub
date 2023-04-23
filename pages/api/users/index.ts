import dbConnect from '../../../db/utils/dbConnect';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();
  const { cookies, method } = req;

  const jwt = cookies.SiteJWT;

  // if (method === "GET") {
  //   try {
  //     // const user = await User.findById(id);
  //     if (jwt) {
  //       res.status(200).json(jwt);
  //     } else {
  //       res.status(200).json(undefined);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  if (!jwt) {
    return res.json({ message: "Invalid token!" });
  }
  
  return res.json({ data: "Top secret data!" });
}
