import React from "react";
import Link from 'next/link';
import { IMovieCardProps } from "@/interfaces/imovies";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
//* Styles coming from '_movie-card.scss'

const MovieCard: React.FC<IMovieCardProps> = ({ movie }) => {

  return (
    <div className="movie-card">
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
        <span className="movie-card-upstairs-time">{movie.time}</span>
      </div>
      <hr className="movie-card-middle-line" />
      <div className="movie-card-name movie-card-text">{movie.name}</div>
      <div className="movie-card-year movie-card-text">
        {movie.publish_year}
      </div>

      <div className="movie-card-imdb">
        <img 
          src="/imdb-icon.png" 
          alt="imdb icon" 
          className="movie-card-imdb-image"
        />
        <span className="movie-card-imdb-score">
          {movie.imdb_score}
        </span>
      </div>

      <div className="movie-card-scores">
        <span className="movie-card-scores-item | movie-card-scores-likes">
          <AiFillLike className="movie-card-scores-item-icon | movie-card-scores-likes-icon"/>
          <span 
            className="movie-card-scores-item-score | movie-card-scores-likes-score">
            {movie.likes}
          </span>
        </span>

        <span className="movie-card-scores-item | movie-card-scores-dislikes">
          <AiFillDislike className="movie-card-scores-item-icon | movie-card-scores-dislikes-icon"/>
          <span 
            className="movie-card-scores-item-score | movie-card-scores-dislikes-score">
            {movie.dislikes}
          </span>
        </span>        
      </div>
    </div>
  );
};

export default MovieCard;
