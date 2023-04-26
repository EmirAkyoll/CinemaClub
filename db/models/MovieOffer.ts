import mongoose from "mongoose";
import { movie_schema } from "../schemas/movie";

const MovieOfferSchema = new mongoose.Schema(movie_schema, { timestamps: true });

export default mongoose.models.Offers || mongoose.model("Offers", MovieOfferSchema);