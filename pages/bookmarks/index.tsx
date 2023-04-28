import React, { useContext } from "react";
import { Context } from "../../context/state";
import MovieField from "../../components/movies/MovieField";
import { IMovieCardsProps } from "@/interfaces/imovies";
import AddMovieOfferModal from "../../components/movies/AddMovieOfferModal";
import axios from "axios";
// import axios from "axios";

export const getServerSideProps = async () => {
  const res_bookmarked = await axios.get(`http://localhost:3000/api/bookmarks`);
    
  return {
    props: {
      bookmarked_movies: res_bookmarked.data ? res_bookmarked.data : null,
    },
  };
};

const BookmarkedMovies: React.FC<IMovieCardsProps | any> = ({ bookmarked_movies, booked_movies_ids }) => {
  const { isNewMovieModalOpen }: boolean | any = useContext(Context);
// console.log("booked movies: ",bookmarked_movies[0].bookmarked);

  return (
    <>
      <MovieField 
        movies={bookmarked_movies[0].bookmarked} 
        booked_movies_ids={booked_movies_ids}
      />
    </>
  );
};

export default BookmarkedMovies;
