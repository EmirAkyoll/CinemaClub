import MovieAdvice from "../../../db/models/MovieAdvice";
import User from "../../../db/models/User";
import MovieBookmarks from "../../../db/models/MovieBookmarks";
import dbConnect from "../../../db/utils/dbConnect";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();
  const { method } = req;

  if (method === "GET") {
    try {
    const bookmarks = await User.aggregate([{
                        $lookup: {
                          from: "movies",
                          localField: "bookmarks",
                          foreignField: "_id",
                          as: "bookmarked",
                        }}
                      ]);
console.log("bookmarks:",bookmarks[1]);

      // const movie_advices = await MovieAdvice.find();
      res.status(200).json(bookmarks);
    } catch (err) {
      console.log(err);
    }
  }
  
  // if (method === "POST") {
  //   try {
  //     const updated_user = User.updateOne(
  //       { _id: id }, //user id matching
  //       { $push: { bookmarks: req.body._id } } //adding movie id to 'bookmarks'
  //     )
  //       console.log("movie id yi bookmarks a ekleme, user_id ve movie_id: ", id, body._id);
        
  //     // const newMovieAdvice = await MovieAdvice.create(req.body);
  //     res.status(200).json(updated_user);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
};

export default handler;
