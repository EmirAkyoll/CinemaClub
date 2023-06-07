import { gql } from "@apollo/client";

export const CREATE_MOVIE = gql`
  mutation CreateMovie($id: ID!, $title: String!, $bannerUrlFirst: String!, $bannerUrlSecond: String!, 
                       $duration: String!, $releaseYear: Int!, $imdbRating: String!, $likes: Int!, 
                       $dislikes: Int!, $genre: String!, $director: String!, $summary: String!, 
                       $storyShortly: String!, $comments: [String]!, $as: String!) {

    createMovie(_id: $id, title: $title, banner_url_first: $bannerUrlFirst, banner_url_second: $bannerUrlSecond, 
                duration: $duration, release_year: $releaseYear, imdb_rating: $imdbRating, likes: $likes, 
                dislikes: $dislikes, genre: $genre, director: $director, summary: $summary, 
                story_shortly: $storyShortly, comments: $comments, as: $as) {
      _id
      title
      banner_url_first
      banner_url_second
      duration
      release_year
      imdb_rating
      likes
      dislikes
      genre
      director
      summary
      story_shortly
      comments
      as
    }
  }
`;

export const CREATE_USER = gql`
  mutation CreateUser($id: ID!, $userName: String!, $password: String!,
                      $eMail: String!, $bookmarks: [String]!) {
    createUser(_id: $id, user_name: $userName, password: $password,
               e_mail: $eMail, bookmarks: $bookmarks) {
      _id
      user_name
      password
      e_mail 
      bookmarks
    }
  }
`;

export const LIKE_IT = gql`
  mutation LikeIt($movieId: ID) {
    likeIt(movie_id: $movieId) {
      movie_id
    }
  }
`;

export const DISLIKE_IT = gql`
  mutation DislikeIt($movieId: ID) {
    dislikeIt(movie_id: $movieId) {
      movie_id
    }
  }
`;

export const BOOK_IT = gql`
  mutation BookIt($id: ID!, $movieId: ID!, $isBooked: Boolean!) {
    bookIt(_id: $id, movie_id: $movieId, is_booked: $isBooked) {
      _id
      movie_id
      is_booked
    }
  }
`;

export const DELETE_MOVIE_OFFER = gql`
  mutation DeleteMovieOffer($offerId: ID) {
    deleteOffer(offer_id: $offerId) {
      _id
      title
      banner_url_first
      banner_url_second
      duration
      release_year
      imdb_rating
      likes
      dislikes
      genre
      director
      summary
      story_shortly
      comments
      as
    }
  }
`;
