import MovieAdvice from "../../../db/models/MovieAdvice";
import MovieOffer from "../../../db/models/MovieOffer";
import dbConnect from "../../../db/utils/dbConnect";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();
  const { method, query:{id} } = req;

  if (method === "DELETE") {
    try {
      const offer = await MovieOffer.findByIdAndDelete(id);
      res.status(200).json(offer);
    } catch (err) {
      console.log(err);
    }
  }
};

export default handler;
