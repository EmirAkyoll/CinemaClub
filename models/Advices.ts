import mongoose from "mongoose";
import { movie_advice_schema } from "../schemas/mongo/advices";

const MovieAdviceSchema = new mongoose.Schema(movie_advice_schema, { timestamps: true });

export default mongoose.models.User || mongoose.model("Advice", MovieAdviceSchema);