const mongoose = require("mongoose");
const { movie_schema } = require("../schemas/movie");

const MovieAdviceSchema = new mongoose.Schema(movie_schema, { timestamps: true });

const MovieAdvice = mongoose.models.Movies || mongoose.model("Movies", MovieAdviceSchema);

module.exports = MovieAdvice;