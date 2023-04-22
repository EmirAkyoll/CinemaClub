import User from "../../../db/models/User";
import dbConnect from '../../../db/utils/dbConnect';
import type { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();
  const body = req.body;
console.log(body);

  const user = await User.findOne({ $or: [{ e_mail: body.e_mail }, { user_name: body.user_name }] });
  if (user) {
    res.status(400).json({ message: "User already exists" });
    return;
  }

  try {
    const newUser = await new User(body);
    await newUser.save();
    res.status(200).json(newUser);
  } catch (err) {
    console.log(err);
  }
};

export default handler;
