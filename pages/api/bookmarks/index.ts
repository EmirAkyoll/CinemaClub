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
                          localField: "bookmarked",
                          foreignField: "_id",
                          as: "bookmarks",
                        }}
                      ]);

      const movie_advices = await MovieAdvice.find();
      res.status(200).json(movie_advices);
    } catch (err) {
      console.log(err);
    }
  }

  if (method === "POST") {
    try {
      const newMovieAdvice = await MovieAdvice.create(req.body);
      res.status(200).json(newMovieAdvice);
    } catch (err) {
      console.log(err);
    }
  }
};

export default handler;
