import React from "react";
import { IMovieCardProps } from "@/interfaces/imovies";
//* Styles coming from '_movie-card.scss'

const MovieCard: React.FC<IMovieCardProps> = ({ movie }) => {
  return (
    <div className="movie-card">
      <div className="movie-card-upstairs">
        <img
          src={movie.banner_url_first}
          alt="movie-icons"
          className="movie-card-upstairs-image"
        />
        {/* <img 
        src={movie.banner_url_second} 
        alt="movie-icons" 
        className="movie-card-image"
      /> */}
        <span className="movie-card-upstairs-time">{movie.time}</span>
      </div>
      <hr className="movie-card-middle-line" />
      <div className="movie-card-name movie-card-text">{movie.name}</div>
      <div className="movie-card-year movie-card-text">
        {movie.publish_year}
      </div>
      {/* <div className="movie-card-director movie-card-text">{movie.director}</div> */}
    </div>
  );
};

export default MovieCard;
