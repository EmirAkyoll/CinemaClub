import React, { useContext } from "react";
import { Context } from "../../context/state";
import MovieField from "../../components/movies/MovieField";
import { IMovieCardsProps } from "@/interfaces/imovies";
import AddMovieAdviceModal from "../../components/movies/AddMovieAdviceModal";
// import axios from "axios";

const Movies: React.FC<IMovieCardsProps> = ({movies}) => {
  const { isNewMovieModalOpen }: boolean | any = useContext(Context);

  return (
    <>
      {isNewMovieModalOpen && <AddMovieAdviceModal />}
      <MovieField movies={movies} />
    </>
  );
};

export default Movies;
