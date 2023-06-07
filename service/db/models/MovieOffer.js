const mongoose = require("mongoose");
const { movie_schema } = require("../schemas/movie");

const MovieOfferSchema = new mongoose.Schema(movie_schema, { timestamps: true });

const MovieOffer = mongoose.models.Offers || mongoose.model("Offers", MovieOfferSchema);

module.exports = MovieOffer;
