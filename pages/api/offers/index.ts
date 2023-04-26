import MovieAdvice from "../../../db/models/MovieAdvice";
import MovieOffer from "../../../db/models/MovieOffer";
import dbConnect from "../../../db/utils/dbConnect";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();
  const { method } = req;

  if (method === "GET") {
    try {
      const movie_offers = await MovieOffer.find();
      console.log("offer in server: ",movie_offers);
      
      res.status(200).json(movie_offers);
    } catch (err) {
      console.log(err);
    }
  }

  if (method === "POST") {
    try {
      const newMovieOffer = await MovieOffer.create(req.body);
      res.status(200).json(newMovieOffer);
    } catch (err) {
      console.log(err);
    }
  }

  if (method === "DELETE") {
    try {
      const movie_offers = await MovieOffer.find();
      res.status(200).json(movie_offers);
    } catch (err) {
      console.log(err);
    }
  }
  // if (method === "POST") {
  //   try {
  //     const newMovieAdvice = await MovieAdvice.create(req.body);
  //     res.status(200).json(newMovieAdvice);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
};

export default handler;
