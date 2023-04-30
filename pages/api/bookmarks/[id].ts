import MovieAdvice from "../../../db/models/MovieAdvice";
import User from "../../../db/models/User";
import MovieBookmarks from "../../../db/models/MovieBookmarks";
import dbConnect from "../../../db/utils/dbConnect";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();
  const { method, query: {id}, body: {movie_id, isBooked} } = req;

  if (method === "POST") {
    try {
      // console.log(id);
      // console.log("zabazum: ", movie_id);
      // const movie = await User.findOne({ bookmarks: movie_id });
      // console.log("film zaten var MI?:  ", movie);

      if (!isBooked) {

        await User.updateOne(
          { _id: id }, //user id matching
          { $addToSet: { bookmarks: movie_id } } //adding movie id to 'bookmarks'
        )
      } else {
        await User.updateOne(
          { _id: id }, //user id matching
          { $pull: { bookmarks: movie_id} } //remove movie id from 'bookmarks'
        )
      }
        
      res.status(200).json(movie_id);
    } catch (err) {
      console.log(err);
    }
  }
};

export default handler;
