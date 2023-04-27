import React, { useContext } from "react";
import { Context } from "../../context/state";
import MovieField from "../../components/movies/MovieField";
import { IMovieCardsProps } from "@/interfaces/imovies";
import AddMovieOfferModal from "../../components/movies/AddMovieOfferModal";
import axios from "axios";
// import axios from "axios";

export const getServerSideProps = async () => {
  const res_bookmarks = await axios.get(`http://localhost:3000/api/bookmarks`);
  const bookmarks = res_bookmarks.data;

  return {
    props: {
      bookmarked_movies: bookmarks ? bookmarks : null,
    },
  };
};

const BookmarkedMovies: React.FC<IMovieCardsProps | any> = ({bookmarked_movies}) => {
  const { isNewMovieModalOpen }: boolean | any = useContext(Context);

  return (
    <>
      <MovieField movies={bookmarked_movies} />
    </>
  );
};

export default BookmarkedMovies;
