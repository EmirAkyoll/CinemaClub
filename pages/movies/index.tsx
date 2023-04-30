import React, { useContext } from "react";
import { Context } from "../../context/state";
import MovieField from "../../components/movies/MovieField";
import { IMovieCardsProps } from "@/interfaces/imovies";
import AddMovieOfferModal from "../../components/movies/AddMovieOfferModal";

const Movies: React.FC<IMovieCardsProps | any> = ({movies}) => {
  const { isNewMovieModalOpen }: boolean | any = useContext(Context);

  return (
    <>
      {isNewMovieModalOpen && <AddMovieOfferModal />}
      <MovieField movies={movies} />
    </>
  );
};

export default Movies;
