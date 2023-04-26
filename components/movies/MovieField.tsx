import React, { useEffect, useContext } from "react";
import MovieCard from "./MovieCard";
import { Context } from "../../context/state";
import { IMovieCardsProps } from "@/interfaces/imovies";
import MovieComment from "./MovieComment";
import JWT from "jsonwebtoken";
import { BiPlus, BiMoviePlay } from "react-icons/bi";
import OffersModal from "./OffersModal";
//* Styles coming from '_movie-field.scss'

const MovieField: React.FC<IMovieCardsProps> = ({ movies }) => {
  const { currentUser, setCurrentUser, setIsNewMovieModalOpen }: any =
    useContext(Context);

  useEffect(() => {
    const decoded_user = JWT.decode(localStorage.getItem("EncodedUserDataJWT"));
    setCurrentUser(decoded_user);
    console.log("current aga: ", currentUser);
  }, []);

  return (
    <div className="movie-field">
      <div className="movie-field-cards">
        <button
          className={`movie-field-button ${currentUser ? "there-is-A-user" : "there-is-NO-user"}`}
          onClick={() => setIsNewMovieModalOpen(true)}
        >
          <BiPlus />
          <BiMoviePlay />
        </button>
        {movies?.map((movie) => (
          <MovieCard key={movie?.title} movie={movie} />
        ))}
        
        <OffersModal />
      </div>
    </div>
  );
};

export default MovieField;
