import User from "../../../db/models/User";
import dbConnect from "../../../db/utils/dbConnect";
import type { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();
  const { method } = req;

  if (method === "GET") {
    try {
      const user = await User.find();
      res.status(200).json(user);
    } catch (err) {
      console.log(err);
    }
  }

  if (method === "POST") {
    try {
      const newuser = await User.create(req.body);
      res.status(200).json(newuser);
    } catch (err) {
      console.log(err);
    }
  }
};

export default handler;
