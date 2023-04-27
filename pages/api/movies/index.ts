import MovieAdvice from "../../../db/models/MovieAdvice";
import dbConnect from "../../../db/utils/dbConnect";
import type { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();
  const { method } = req;

  if (method === "GET") {
    try {
      const movie_advices = await MovieAdvice.find();
      res.status(200).json(movie_advices);
    } catch (err) {
      console.log(err);
    }
  }

  if (method === "POST") {
    try {
      const movie = await MovieAdvice.findOne({
         $or: [
          { title: req.body.title }, 
          { release_year: req.body.release_year },
          { director: req.body.director }
        ] 
      });
      if (movie) {
        res.status(400).json({ message: "Movie already exists" });
        return;
      }

      const newMovieAdvice = await MovieAdvice.create(req.body);
      res.status(200).json(newMovieAdvice);
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
