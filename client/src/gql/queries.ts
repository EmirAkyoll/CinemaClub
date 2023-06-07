import { gql } from "@apollo/client";

export const GET_ALL_MOVIES = gql`
  query GetAllMoviesAsCropped {
    getAllMovies {
      _id
      title
      banner_url_first
      banner_url_second
      duration
      release_year
      imdb_rating
      likes
      dislikes
    }
  }
`;

export const GET_CLICKED_MOVIE = gql`
  query GetAllMoviesAsAll($id: ID!) {
    getClickedMovie(_id: $id) {
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
    }
  }
`;

export const GET_OFFERS = gql`
  query GetOffers {
    getOffers {
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
    }
  }
`;

export const GET_BOOKMARKS = gql`
  query GetBookmarks {
    getBookmarks {
      _id
      title
      banner_url_first
      banner_url_second
      duration
      release_year
      imdb_rating
      likes
      dislikes
    }
  }
`;

export const GET_USER = gql`
  query GetUser($userName: String!, $password: String!) {
    getUser(user_name: $userName, password: $password) {
      _id
      user_name
      password
      e_mail
      bookmarks
    }
  }
`;
