import React from "react";
import axios from "axios";
import { IMovie } from "@/interfaces/imovies";

export const getServerSideProps = async ({ params }: any) => {
  const res = await axios.get(`http://localhost:3000/api/movies/${params.id}`);
  const chosen_movie = res.data;

    return {
      props: {
        movie: chosen_movie ? chosen_movie : null,
      },
    };
};

const Movie: React.FC<IMovie | any> = ({ movie }) => {
  console.log(movie);

  return (
    <div className="movie-page">
      <h1 className="movie-page-header">{movie.title}</h1>
      
      <div className="movie-page-banners">
        <img
          src={movie.banner_url_first}
          alt=""
          className="movie-page-banners-item"
        />
        <img
          src={movie.banner_url_second}
          alt=""
          className="movie-page-banners-item"
        />
      </div>

      <div className="movie-page-texts">
        <p className="movie-page-texts-item">
          {movie.summary}
        </p>
        <p className="movie-page-texts-item">
          {movie.story_shortly}
        </p>
      </div>

      <div className="movie-page-comments"></div>
    </div>
  );
};

export default Movie;
