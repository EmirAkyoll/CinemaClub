import React, { useEffect, useContext, useState } from "react";
import { IMovie, IMovieCardProps } from "@/interfaces/imovies";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import Link from "next/link";
import { Context } from "../../context/state";
import axios from "axios";
//* Styles coming from '_movie-card.scss'

const MovieCard: React.FC<IMovieCardProps | any> = ({ movie }) => {
  const { currentUser }: any = useContext(Context);
  const [isBooked, setIsBooked] = useState<boolean>(false)
// console.log("GAGATAŞI: ", currentUser.bookmarks);

  async function bookingOperation(movie_id: IMovie | any) {
    await axios.post(`http://localhost:3000/api/bookmarks/${currentUser.id}`, {movie_id, isBooked})
    console.log(isBooked);
    setIsBooked(!isBooked)
    console.log(isBooked);
    
  }

  // useEffect(() => {
  //   async function getAllBookmarks() {
  //     const res_bookmarked = await axios.get(`http://localhost:3000/api/bookmarks`);
  //   }

  //   getAllBookmarks();
  // }, []);

  return (
    <div className="movie-card">
      {(currentUser && !currentUser?.isAdmin) && (
        <div className="movie-card-bookmark" onClick={() => bookingOperation(movie._id)}>
          {(isBooked || currentUser.bookmarks.includes(movie._id)) ? <FaBookmark /> : <FaRegBookmark />}
        </div>
      )}
      <Link href={`/movies/${movie._id}`}>
        <div className="movie-card-upstairs">
          <img
            src={movie.banner_url_first}
            alt=""
            className="movie-card-upstairs-image-item | movie-card-upstairs-image-first"
          />
          <img
            src={movie.banner_url_second}
            alt=""
            className="movie-card-upstairs-image-item | movie-card-upstairs-image-second"
          />
          <span className="movie-card-upstairs-time">{movie.duration}</span>
        </div>
      </Link>

      <hr className="movie-card-middle-line" />

      <Link href={`/movies/${movie._id}`}>
        <a className="movie-card-texts">
          <div className="movie-card-name movie-card-text">{movie.title}</div>
          <div className="movie-card-year movie-card-text">{movie.release_year}</div>
        </a>
      </Link>

      <div className="movie-card-imdb">
        <img
          src="/imdb-icon.png"
          alt="imdb icon"
          className="movie-card-imdb-image"
        />
        <span className="movie-card-imdb-score">{movie.imdb_rating}</span>
      </div>

      <div className="movie-card-scores">
        <span className="movie-card-scores-item | movie-card-scores-likes">
          <AiFillLike className="movie-card-scores-item-icon | movie-card-scores-likes-icon" />
          <span className="movie-card-scores-item-score | movie-card-scores-likes-score">
            {movie.likes}
          </span>
        </span>

        <span className="movie-card-scores-item | movie-card-scores-dislikes">
          <AiFillDislike className="movie-card-scores-item-icon | movie-card-scores-dislikes-icon" />
          <span className="movie-card-scores-item-score | movie-card-scores-dislikes-score">
            {movie.dislikes}
          </span>
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
