import React from "react";
import MovieCard from "./MovieCard";
import { IMovieCardsProps } from "@/interfaces/imovies";
//* Styles coming from '_movie-field.scss'

const MovieField: React.FC<IMovieCardsProps> = ({ movies }) => {
  return (
    <div className="movie-field">
      <div className="movie-field-cards">
        {movies.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieField;
