import React from "react";
import { IMovieCardProps } from "@/interfaces/imovies";
//* Styles coming from '_movie-card.scss'

const MovieCard: React.FC<IMovieCardProps> = ({ movie }) => {
  return (
    <div className="movie-card">
      <img 
        src="/movies-icon.png" 
        alt="movie-icons" 
        className="movie-card-image"
      />
      <hr className="movie-card-middle-line" />
      <div className="movie-card-name movie-card-text">{movie.name}</div>
      <div className="movie-card-year movie-card-text">{movie.publish_year}</div>
      <div className="movie-card-director movie-card-text">{movie.director}</div>
    </div>
  );
};

export default MovieCard;
