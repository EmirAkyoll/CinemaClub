const mongoose = require("mongoose");
const { user_schema } = require("../schemas/user");

const UserSchema = new mongoose.Schema(user_schema, { timestamps: true });

const User = mongoose.models.Users || mongoose.model("Users", UserSchema);

module.exports = User;