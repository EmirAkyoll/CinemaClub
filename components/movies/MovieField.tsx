import React, { useEffect, useContext } from "react";
import { Context } from "../../context/state";
import { IMovieCardsProps } from "@/interfaces/imovies";
import { BiPlus, BiMoviePlay } from "react-icons/bi";
import MovieCard from "./MovieCard";
import JWT from "jsonwebtoken";
import axios from "axios";
//* Styles coming from '_movie-field.scss'

const MovieField: React.FC<IMovieCardsProps | any> = ({ movies }) => {
  const { currentUser, setCurrentUser, setIsNewMovieModalOpen }: any = useContext(Context);
  const booked_movies_ids: string[] = [];

  useEffect(() => {
    async function getAllBooked() {
      const res_bookmarked = await axios.get(`http://localhost:3000/api/bookmarks`);
      // console.log("BOOKED ONES: ",res_bookmarked.data[0].bookmarks);

      for(let booked_movie of res_bookmarked.data[0].bookmarks) {
        booked_movies_ids.push(booked_movie)
      }      
    }

    getAllBooked();
    // const decoded_user = JWT.decode(localStorage.getItem("EncodedUserDataJWT"));
    // setCurrentUser(decoded_user);
  }, [booked_movies_ids]);
  console.log("current aga: ", currentUser);

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
        {movies?.map((movie: any) => (
          <MovieCard 
            key={movie?._id} 
            movie={movie}
            booked_movies_ids={booked_movies_ids}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieField;
