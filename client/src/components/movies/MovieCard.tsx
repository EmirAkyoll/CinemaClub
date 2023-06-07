import React, { useEffect, useState } from "react";
import { IMovie, IMovieCardProps } from "../../interfaces/imovies";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { FaBookmark, FaRegBookmark, FaAd } from "react-icons/fa";
import { Box, Rating } from "@mui/material";
import { useMutation } from "@apollo/client";
import { BOOK_IT, DISLIKE_IT, LIKE_IT } from "../../gql/mutations";
import { useSelector, useDispatch } from 'react-redux';
import { getMovieId } from "../../store/movieSlice";
import { Link } from "react-router-dom";
import "./MovieCard.css";

const MovieCard: React.FC<IMovieCardProps | any> = ({ movie, userId, bookmarks }) => {
  const movies = useSelector((state: any) => state.movies);
  const dispatch = useDispatch();
// console.log("movies AGA: ", userId, "bookmarks: ", bookmarks);

  const [bookIt, { data: booking_data, loading: booking_loading, error: booking_error }] = useMutation(BOOK_IT);
  const [likeIt, { data: like_data, loading: like_loading, error: like_error }] = useMutation(LIKE_IT);
  const [dislikeIt, { data: dislike_data, loading: dislike_loading, error: dislike_error }] = useMutation(DISLIKE_IT);
  const [isBooked, setIsBooked] = useState<boolean>(false);
    // if(like_error) return (<p>Error: {like_error?.message}</p>)
    
  function bookingOperation(arg_user_id: string, arg_movie_id: string, bookingControl: boolean) {
    bookIt({
      variables: {
        "id": arg_user_id,
        "movieId": arg_movie_id,
        "isBooked": bookingControl
      },
    });

    setIsBooked(!isBooked)
    
    console.log("movie id: ", arg_movie_id, "user id: ", userId);
  }

  function likeTheMovie(arg_movie_id: string) {    
    likeIt({
      variables: { "movieId": arg_movie_id }
    })
  }

  function dislikeTheMovie(arg_movie_id: string) {    
    dislikeIt({
      variables: { "movieId": arg_movie_id }
    })
  }

  return (
    <div className="movie-card" onClick={() => {dispatch(getMovieId(movie._id)); console.log("movie id: ", movie._id)}}>
      <div className="movie-card-bookmark" onClick={() => bookingOperation(userId, movie._id, isBooked)}>
        {(isBooked && bookmarks.includes(movie._id)) ? <FaBookmark /> : <FaRegBookmark />}
      </div>
      <Link to={`/movies/${movie?._id}`} style={{textDecoration: 'none'}}>
        <Box>
          <div className="movie-card-upstairs">
            <img
              src={movie.banner_url_first}
              alt=""
              className="movie-card-upstairs-image-item | movie-card-upstairs-image-first"
            />
            <img
              src={movie.banner_url_second}
              alt=""
              className="movie-card-upstairs-image-item | movie-card-upstairs-image-second"
            />
            <span className="movie-card-upstairs-time">{movie.duration}</span>
          </div>
        </Box>
      </Link>

      <Rating 
        name="half-rating-read" 
        size="small" 
        defaultValue={2.5} 
        precision={0.5} 
        readOnly
        value={((movie.likes - movie.dislikes) / (movie.likes + movie.dislikes)) * 5}
        sx={{
          position: 'absolute',
          bottom: '29%',
          right: '8px',
          backgroundColor: 'black',
          pl: '5px',
          border: '1px solid #777',
          borderRadius: '5px'
        }}
      />

      <hr className="movie-card-middle-line" />

      <Link to={`/movies/${movie?._id}`} style={{textDecoration: 'none', marginTop: '12px'}}>
        <Box>
          <a className="movie-card-texts">
            <div className="movie-card-name movie-card-text">{movie.title}</div>
            <div className="movie-card-year movie-card-text">
              {movie.release_year}
            </div>
          </a>
        </Box>

        <div className="movie-card-imdb">
          <img
            src="/imdb-icon.png"
            alt="imdb icon"
            className="movie-card-imdb-image"
            />
          <span className="movie-card-imdb-score">{movie.imdb_rating}</span>
        </div>
      </Link>

      <div className="movie-card-scores">
        <span 
          className="movie-card-scores-item | movie-card-scores-likes" 
          onClick={() => {likeTheMovie(movie._id)}}
        >
          <AiFillLike className="movie-card-scores-item-icon | movie-card-scores-likes-icon" />
          <span className="movie-card-scores-item-score | movie-card-scores-likes-score">
            {movie.likes}
          </span>
        </span>

        <span 
          className="movie-card-scores-item | movie-card-scores-dislikes" 
          onClick={() => {dislikeTheMovie(movie._id)}}
        >
          <AiFillDislike className="movie-card-scores-item-icon | movie-card-scores-dislikes-icon" />
          <span className="movie-card-scores-item-score | movie-card-scores-dislikes-score">
            {movie.dislikes}
          </span>
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
