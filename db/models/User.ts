import mongoose from "mongoose";
import { user_schema } from "../schemas/users";

const UserSchema = new mongoose.Schema(user_schema, { timestamps: true });

export default mongoose.models.Users || mongoose.model("Users", UserSchema);