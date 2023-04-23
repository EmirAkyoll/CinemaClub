// import type { NextApiRequest, NextApiResponse } from 'next'
// // import { serialize } from "cookie";

// export default async function (req: NextApiRequest, res: NextApiResponse) {
//   // const { cookies } = req;
//   // const jwt = cookies.SiteJWT;
//   // const user = JSON.parse(localStorage.getItem('EncodedUserDataJWT'));
//   if (!user) {
//     return res.json({ message: "You are already not logged in..." });
//   } else {
//     // const serialised = serialize("SiteJWT", null, {
//     //   httpOnly: true,
//     //   secure: process.env.NODE_ENV !== "development",
//     //   sameSite: "strict",
//     //   maxAge: -1,
//     //   path: "/",
//     // });

//     // res.setHeader("Set-Cookie", serialised);
//     res.status(200).json({ message: "Successfuly logged out!" });
//   }
// }
