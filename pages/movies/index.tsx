import React, { useContext } from "react";
import { Context } from "../../context/state";
import MovieField from "../../components/movies/MovieField";
import { IMovieCardsProps } from "@/interfaces/imovies";
import AddMovieOfferModal from "../../components/movies/AddMovieOfferModal";

const Movies: React.FC<IMovieCardsProps | any> = ({movies, booked_movies_ids}) => {
  const { isNewMovieModalOpen }: boolean | any = useContext(Context);

  return (
    <>
      {isNewMovieModalOpen && <AddMovieOfferModal />}
      <MovieField 
        movies={movies}
        booked_movies_ids={booked_movies_ids}
      />
    </>
  );
};

export default Movies;
