import React from "react";
import MovieField from "../../components/movies/MovieField";
import { IMovieCardsProps } from "@/interfaces/imovies";
import AddMovieAdviceModal from "../../components/movies/AddMovieAdviceModal";
// import axios from "axios";

const Movies:React.FC<IMovieCardsProps> = ({movies}) => {

  return (
    <>
      {/* <AddMovieAdviceModal /> */}
      <MovieField movies={movies} />
    </>
  );
};

export default Movies;
