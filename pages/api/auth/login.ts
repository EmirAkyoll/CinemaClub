import type { NextApiRequest, NextApiResponse } from "next";
import JWT from "jsonwebtoken";
import User from "../../../db/models/User";
import dbConnect from "../../../db/utils/dbConnect";

const secret: string | any = process.env.SECRET;
const admin_id: string | any = process.env.ADMIN_ID;
const admin_password: string | any = process.env.ADMIN_PASSWORD;

export default async function (req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();
  const { method, query: { id }, body: { username, password }} = req;

  if (username && password) {

    if (method === "POST") {
      let token = null;

      if (username === admin_id && password === admin_password) {
        token = JWT.sign(
          {
            isAdmin: true,
            exp: 60 * 60 * 24 * 30, // 1 month
          },
          secret
        );

        res.status(200).json(token);
      } else {
        try {
          const user = await User.findOne({ $and: [{ user_name: username }, { password: password }] });
          console.log("user aga BUM: ", user);

          token = JWT.sign(
            {
              exp: 60 * 60 * 24, // 1 day
              id: user._id,
              username: user.user_name,
              email: user.e_mail,
              bookmarks: user?.bookmarks
            },
            secret
          );

          // console.log(token);

          if (user) {
            res.status(200).json(token);
          }
        } catch (err) {
          console.log(err);
        }
      }
    }
  } else {
    res.json({ message: "Invalid credentials!" });
  }
}
