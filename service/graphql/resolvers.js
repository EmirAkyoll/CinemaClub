const MovieAdvice = require("../db/models/MovieAdvice");
const MovieOffer = require("../db/models/MovieOffer");
const User = require("../db/models/User");
const JWT = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const secret = process.env.SECRET;
const admin_id = process.env.ADMIN_ID;
const admin_password = process.env.ADMIN_PASSWORD;

const resolvers = {
  Query: {
    getAllMovies: async () => {
      try {
        const allMovies = await MovieAdvice.find();
        return allMovies;
      } catch (error) {
        console.log(error);
      }
    },

    getClickedMovie: async(_, args) => {
      try {
        const clicked_movie = await MovieAdvice.findById(args._id);
        return clicked_movie;
      } catch (error) {
        console.log(error);
      }
    },

    getOffers: async () => {
      try {
        const offers = await MovieOffer.find();
        return offers;
      } catch (error) {
        console.log(error);
      }
    },

    getBookmarks: async () => {
      try {
        const bookmarks = await User.aggregate([{
                            $lookup: {
                              from: "movies",
                              localField: "bookmarks",
                              foreignField: "_id",
                              as: "bookmarked",
                            }}
                          ]);
        // console.log("bookmarks: ", bookmarks[1].bookmarked);
          return bookmarks[1].bookmarked;
        } catch (err) {
          console.log(err);
        }
    },

    getUser: async(_, args) => {
      console.log("args user: ", args);
      if (args.user_name && args.password) {

          if (args.user_name === admin_id && args.password === admin_password) {

            return user;
            
          } else {
            try {
              const user = await User.findOne({ 
                  $and: [
                    { user_name: args.user_name }, 
                    { password: args.password }
                  ] 
              });
              console.log("user aga BUM: ", user);
              
              if (user) {
                return user;
              }
            } catch (err) {
              console.log(err);
            }
          }

      } else {
        throw new Error("There is no this user");
        // return "Invalid credentials!";
      }
    },
  },

  Mutation: {
    createMovie: async (_, args) => {
      console.log("args create movie: ", args);
      try {
        let movie;

        if (args.as === "advice") {
            movie = await MovieAdvice.findOne({
              $or: [
               { title: args.title }, 
               { release_year: args.release_year },
               { director: args.director }
              ] 
            });

            if (movie) {
              return "Movie is already exist";
            }

            await MovieAdvice.create(args);
        }

        if (args.as === "offer") {
            movie = await MovieOffer.findOne({
              $or: [
               { title: args.title }, 
               { release_year: args.release_year },
               { director: args.director }
              ] 
            });

            if (movie) {
              return "Movie is already exist";
            }

         await MovieOffer.create(args);
        }
      } catch (err) {
        console.log(err);
      }
    },

    deleteOffer: async (_, args) => {
      console.log("args delete USER: ", args);
      try {
        await MovieOffer.findByIdAndDelete(args.offer_id)
      } catch (error) {
        console.log(error);
      }
    },

    createUser: async (_, args) => {
      console.log("args create USER: ", args);
      try {
        const new_user = await User.findOne({
           $or: [
            { user_name: args.user_name }, 
            { e_mail: args.e_mail },
           ] 
        });

// console.log("there is user ALREADY? : ", new_user);

        if (new_user) {
          // throw new Error("User is already exist")
          return "User is already exist AGIA";
        }

        await User.create(args);
        return "User added successfully";
      } catch (err) {
        console.log(err);
      }
    },

    bookIt: async (_, args) => {
      console.log("args booking: ", args);
      try {
        if (!args.is_booked) {
          await User.updateOne(
            { _id: args._id }, //user id matching
            { $addToSet: { bookmarks: args.movie_id } } //adding movie id to 'bookmarks'
          )
        } else {
          await User.updateOne(
            { _id: args._id }, //user id matching
            { $pull: { bookmarks: args.movie_id} } //remove movie id from 'bookmarks'
          )
        }
        return args;
      } catch (err) {
        console.log(err);
      }
    },

    likeIt: async (_, args) => {
      console.log("args likes: ", args);
      try {
        await MovieAdvice.updateOne(
          { _id: args.movie_id }, // movie id matching
          { $inc: { likes: 1 } } // increase the likes
        )
        return "increase is successfully";
      } catch (err) {
        console.log(err);
      }
    },

    dislikeIt: async (_, args) => {
      console.log("args dislikes: ", args);
      try {
        await MovieAdvice.updateOne(
          { _id: args.movie_id }, // movie id matching
          { $inc: { dislikes: 1 } } // increase the dislikes
        )
        return "decrease is successfully";
      } catch (err) {
        console.log(err);
      }
    },
  }
};

module.exports = resolvers;
