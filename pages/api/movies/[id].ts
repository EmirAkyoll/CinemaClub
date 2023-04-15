import MovieAdvice from "@/db/models/MovieAdvice";
import dbConnect from "@/db/utils/dbConnect";
import type { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();
  const { method, query: { id }} = req;

  if (method === "GET") {
    try {
      const movie_advice = await MovieAdvice.findById(id);
      res.status(200).json(movie_advice);
    } catch (err) {
      console.log(err);
    }
  }

  if (method === "DELETE") {
    try {
      const movie_advice = await MovieAdvice.findByIdAndDelete(id);
      res.status(200).json(movie_advice);
    } catch (err) {
      console.log(err);
    }
  }
};

export default handler;