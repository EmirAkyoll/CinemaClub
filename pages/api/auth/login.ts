import type { NextApiRequest, NextApiResponse } from "next";
import JWT from "jsonwebtoken";
import User from "../../../db/models/User";
import dbConnect from "../../../db/utils/dbConnect";

const secret: string | any = process.env.SECRET;

export default async function (req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();
  const {method, query: {id}, body: {username, password}} = req;

  if (username && password) {

    const token = JWT.sign(
      {
        exp: 60 * 60 * 24, // 1 day
        username: username,
      }, //? diğer user verileri de getirilecek
      secret
    );

    if (method === "POST") {
      try {
        const user = await User.findOne({ $and: [{ user_name: username }, { password: password }] });
        console.log("user aga: ", user);
        
        if(user){
          
          res.status(200).json(user);
        }
      } catch (err) {
        console.log(err);
      }
    }
  
    // res.status(200).json({messages: "Success!"});
  } else {
    res.json({ message: "Invalid credentials!" });
  }
}
