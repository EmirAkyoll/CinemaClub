import mongoose from "mongoose";
import { movie_schema } from "../schemas/movie";

const MovieAdviceSchema = new mongoose.Schema(movie_schema, { timestamps: true });

export default mongoose.models.Movies || mongoose.model("Movies", MovieAdviceSchema);