import React, { useEffect, useState } from 'react'
import { IMovie } from '../../interfaces/imovies';
import { useQuery } from '@apollo/client';
import { GET_CLICKED_MOVIE } from '../../gql/queries';
import { useSelector, useDispatch } from 'react-redux';
import './MovieClicked.css'

const MovieClicked: React.FC<IMovie | any> = ({ movie }) => {
    const { clickedMovieId } = useSelector((state: any) => state.movies);
    const dispatch = useDispatch();

    const [comment, setComment] = useState<string>('')
    const [movieData, setMovieData] = useState<IMovie>()

    const { loading, error, data } = useQuery(GET_CLICKED_MOVIE, {
        variables: { "id": clickedMovieId }
    });
    
    useEffect(() => {
        setMovieData(data?.getClickedMovie)
        console.log("get clicked movie data: ", data?.getClickedMovie);
    }, [clickedMovieId])

    function sendComment() {
      // await axios.post(`http://localhost:3000/api/movies/${movie._id}`, {comment});
    }

    return (
      <div className="movie-page">
        <h1 className="movie-page-header">{movieData?.title}</h1>

        <div className="movie-page-showcase">
          <img
            src={movieData?.banner_url_first}
            alt="first-banner"
            className="movie-page-showcase-banner"
          />
          <img
            src={movieData?.banner_url_second}
            alt="second-banner"
            className="movie-page-showcase-banner"
          />
  
          <div className="movie-page-showcase-genre">
            {movieData?.genre}
          </div>
        </div>
  
        <div className="movie-page-texts">
          <p className="movie-page-texts-item">{movieData?.summary}</p>
          <p className="movie-page-texts-item">{movieData?.story_shortly}</p>
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
        {movieData?.comments.map((comment: any) => (  
          <div className="movie-page-comments-item">
            <div className="movie-page-comments-item-content">
              {comment}
            </div>
          </div>
          ))}
        </div>
      </div>
    );
}

export default MovieClicked;
