import React, { useState } from "react";
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
  const [comment, setComment] = useState<string>('')
  console.log("movie: ",movie, "comment: ",comment);

  async function sendComment() {
    await axios.post(`http://localhost:3000/api/movies/${movie._id}`, {comment});
  }

  return (
    <div className="movie-page">
      <h1 className="movie-page-header">{movie.title}</h1>

      <div className="movie-page-showcase">
        <img
          src={movie.banner_url_first}
          alt="first-banner"
          className="movie-page-showcase-banner"
        />
        <img
          src={movie.banner_url_second}
          alt="second-banner"
          className="movie-page-showcase-banner"
        />

        <div className="movie-page-showcase-genre">
          {movie.genre}
        </div>
      </div>


      <div className="movie-page-texts">
        <p className="movie-page-texts-item">{movie.summary}</p>
        <p className="movie-page-texts-item">{movie.story_shortly}</p>
      </div>

      <div className="movie-page-comment-entry">
        <input 
          type="text" 
          name="comment" 
          id="comment"
          className="movie-page-comment-entry-textbox"
          placeholder="Enter your comment.."
          onChange={(e) => setComment(e.target.value)}
        />
        <button 
          type="submit"
          onClick={sendComment}
          className="movie-page-comment-entry-button"  
        >
          Send
        </button>
      </div>
      <div className="movie-page-comments">
      {movie?.comments.map((comment: any) => (  
        <div className="movie-page-comments-item">
          <div className="movie-page-comments-item-content">
            {comment}
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Movie;
