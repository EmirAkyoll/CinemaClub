import type { NextApiRequest, NextApiResponse } from "next";
import { sign } from "jsonwebtoken";
import { serialize } from "cookie";
import User from "../../../db/models/User";
import dbConnect from "../../../db/utils/dbConnect";

const secret: string | any = process.env.SECRET;

export default async function (req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();
  const {method, query: {id}, body: {username, password}} = req;

  if (username && password) {
    
    const token = sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24, // 1 day
        username: username,
      },
      secret
      );
      
    const serialised = serialize("SiteJWT", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 30,
      path: "/",
    });

    // if (method === "GET") {
    //   try {
    //     const user = await User.findOne({user_name: `${username}`});
    //     // console.log(user);
        
    //     // res.setHeader("Set-Cookie", serialised);
    //     // res.status(200).json(user);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // }

    if (method === "POST") {
      try {
        const user = await User.findOne({ $and: [{ user_name: username }, { password: password }] });
        console.log("user aga: ", user);
        
        if(user){
          res.setHeader("Set-Cookie", serialised);
          res.status(200).json(user);
        }
      } catch (err) {
        console.log(err);
      }
    }
  
    // res.setHeader("Set-Cookie", serialised);
    // res.status(200).json({messages: "Success!"});
  } else {
    res.json({ message: "Invalid credentials!" });
  }
}
