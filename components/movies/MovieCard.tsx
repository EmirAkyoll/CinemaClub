import React, { useEffect, useContext } from "react";
import { IMovieCardProps } from "@/interfaces/imovies";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import Link from "next/link";
import { Context } from "../../context/state";
//* Styles coming from '_movie-card.scss'

const MovieCard: React.FC<IMovieCardProps> = ({ movie }) => {
  const { currentUser }: any = useContext(Context);

  return (
    <div className="movie-card">
      {!currentUser?.isAdmin && (
        <div className="movie-card-bookmark">
          <FaRegBookmark />
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
