const typeDefs = `#graphql
type Query {
  getUser(user_name: String!, password: String!): User

  getAllMovies: [MovieCropped]
  getClickedMovie(_id: ID!): MovieAll
  getOffers: [MovieAll]
  getBookmarks: [MovieCropped]
},

type Mutation {
  bookIt(_id: ID!, movie_id: ID!, is_booked: Boolean!): Booking

  likeIt(movie_id: ID): MovieLikes
  dislikeIt(movie_id: ID): MovieDislikes

  createUser(_id: ID!, user_name: String!, password: String!, e_mail: String!, bookmarks: [String]!): User

  deleteOffer(offer_id: ID): MovieAll

  createMovie(_id: ID!, title: String!, banner_url_first: String!, banner_url_second: String!, 
              duration: String!, release_year: Int!, imdb_rating: String!, likes: Int!, 
              dislikes: Int!, genre: String!, director: String!, summary: String!,
              story_shortly: String!, comments: [String]!, as: String!): MovieAll
},

type User {
  _id: ID!
  user_name: String!
  password: String!
  e_mail: String!
  bookmarks: [String]!
},

type MovieLikes {
  movie_id: ID
},

type MovieDislikes {
  movie_id: ID
},

type MovieCropped {
  _id: ID!
  title: String!
  banner_url_first: String!
  banner_url_second: String!
  duration: String!
  release_year: Int!
  imdb_rating: String!
  likes: Int!
  dislikes: Int!
},

type MovieAll {
  _id: ID!
  title: String!
  banner_url_first: String!
  banner_url_second: String!
  duration: String!
  release_year: Int!
  imdb_rating: String!
  likes: Int!
  dislikes: Int!
  genre: String!
  director: String!
  summary: String!
  story_shortly: String!
  comments: [String]!
  as: String
},

type Booking {
  _id: ID!
  movie_id: ID!
  is_booked: Boolean!
},

input MovieInput {
  _id: ID!
  title: String!
  banner_url_first: String!
  banner_url_second: String!
  duration: String!
  release_year: Int!
  imdb_rating: String!
  likes: Int!
  dislikes: Int!
  genre: String!
  director: String!
  summary: String!
  story_shortly: String!
  comments: [String]!
  as: String!
}
`;

module.exports = typeDefs;
