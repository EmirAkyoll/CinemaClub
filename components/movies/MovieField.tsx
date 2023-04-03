import React from "react";
import MovieCard from "./MovieCard";
//* Styles coming from '_movie-field.scss'

const MovieField = ({ movies }) => {
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
