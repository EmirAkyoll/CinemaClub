import mongoose from "mongoose";
import { user_schema } from "../schemas/mongo/users";

const UserSchema = new mongoose.Schema(user_schema, { timestamps: true });

export default mongoose.models.User || mongoose.model("User", UserSchema);