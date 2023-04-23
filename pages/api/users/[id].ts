import User from "../../../db/models/User";
import dbConnect from "../../../db/utils/dbConnect";
import type { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();
  const {method, query: { id }} = req;

  if (method === "GET") {
    try {
      const user = await User.findById(id);
      res.status(200).json(user);
    } catch (err) {
      console.log(err);
    }
  }

  if (method === "PUT") {
    try {
      const users = await User.findByIdAndUpdate(id, req.body, { new: true });
      res.status(200).json(users);
    } catch (err) {
      console.log(err);
    }
  } 
};

export default handler;
