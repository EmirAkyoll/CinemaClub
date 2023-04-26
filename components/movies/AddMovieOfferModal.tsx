import React, { useContext, Dispatch, SetStateAction, useState } from "react";
import { Context } from "../../context/state";
import { GrClose, GrBookmark } from "react-icons/gr";
import { v4 as generate_random_id } from 'uuid';
import { IMovie } from "@/interfaces/imovies";
import axios from "axios";
//* Styles coming from '_add-movie-advice-modal.scss'

const AddMovieAdviceModal: React.FC = () => {
  const { setIsNewMovieModalOpen, currentUser }: Dispatch<SetStateAction<boolean>> | any = useContext(Context);
  const [movieData, setMovieData] = useState<IMovie>({
    _id: generate_random_id(),
    title: "",
    genre: "",
    duration: "",
    release_year: "",
    imdb_rating: "",
    director: "",
    banner_url_first: "",
    banner_url_second: "",
    summary: "",
    story_shortly: "",
    likes: 0,
    dislikes: 0,
  });

  async function sendMovieData() { 
    console.log("user: ",currentUser);
    
    await axios.post('http://localhost:3000/api/offers', movieData)
               .then(data => console.log(data))
               .catch(err => console.log(err))
               .finally(setIsNewMovieModalOpen(false))
  }

  return (
    <div className="modal">
      <div className="modal-backdrop"></div>
      <div className="modal-header">Add New Movie Offer</div>
      <button 
        className="modal-close-button"
        onClick={() => setIsNewMovieModalOpen(false)}
      >
        <GrClose className="modal-close-button-icon"/>
      </button>

      <div className="modal-sections-wrapper">
        <div className="modal-sections-wrapper-section">
          <div className="modal-sections-wrapper-section-item">
            <input
              type="text"
              id="movie-title"
              name="movie-title"
              value={movieData.title}
              autoComplete="off"
              className="modal-sections-wrapper-section-item-textbox"
              placeholder="Enter title.."
              onChange={(e) => setMovieData({ ...movieData, title: e.target.value })}
            />
          </div>

          <div className="modal-sections-wrapper-section-item">
            <input
              type="text"
              id="movie-genre"
              name="movie-genre"
              value={movieData.genre}
              autoComplete="off"
              className="modal-sections-wrapper-section-item-textbox"
              placeholder="Enter genre .."
              onChange={(e) => setMovieData({ ...movieData, genre: e.target.value })}
            />
          </div>

          <div className="modal-sections-wrapper-section-item">
            <input
              type="text"
              id="movie-duration"
              name="movie-duration"
              value={movieData.duration}
              autoComplete="off"
              className="modal-sections-wrapper-section-item-textbox"
              placeholder="Duration as 'hrs:min:sec'.."
              onChange={(e) => setMovieData({ ...movieData, duration: e.target.value })}
            />
          </div>
        </div>

        <div className="modal-sections-wrapper-section">
          <div className="modal-sections-wrapper-section-item">
            <input
              type="text"
              id="movie-release-year"
              name="movie-release-year"
              value={movieData.release_year}
              autoComplete="off"
              className="modal-sections-wrapper-section-item-textbox"
              placeholder="Enter release year.."
              onChange={(e) => setMovieData({ ...movieData, release_year: e.target.value })}
            />
          </div>

          <div className="modal-sections-wrapper-section-item">
            <input
              type="text"
              id="movie-imdb-rating"
              name="movie-imdb-rating"
              value={movieData.imdb_rating}
              autoComplete="off"
              className="modal-sections-wrapper-section-item-textbox"
              placeholder="IMDb as ?/10.."
              onChange={(e) => setMovieData({ ...movieData, imdb_rating: e.target.value })}
            />
          </div>

          <div className="modal-sections-wrapper-section-item">
            <input
              type="text"
              id="movie-director"
              name="movie-director"
              value={movieData.director}
              autoComplete="off"
              className="modal-sections-wrapper-section-item-textbox"
              placeholder="Enter director.."
              onChange={(e) => setMovieData({ ...movieData, director: e.target.value })}
            />
          </div>
        </div>
      </div>

      <div className="modal-banner-urls">
        <div className="modal-banner-urls-item">
          <input
            type="text"
            id="movie-banner-first"
            name="movie-banner-first"
            value={movieData.banner_url_first}
            autoComplete="off"
            className="modal-banner-urls-item-textbox | modal-sections-wrapper-section-item-textbox"
            placeholder="Enter first banner url .."
            onChange={(e) => setMovieData({ ...movieData, banner_url_first: e.target.value })}
          />
        </div>

        <div className="modal-banner-urls-item">
          <input
            type="text"
            id="movie-banner-second"
            name="movie-banner-second"
            value={movieData.banner_url_second}
            autoComplete="off"
            className="modal-banner-urls-item-textbox | modal-sections-wrapper-section-item-textbox"
            placeholder="Enter second banner url .."
            onChange={(e) => setMovieData({ ...movieData, banner_url_second: e.target.value })}
          />
        </div>
      </div>

      <div className="modal-text-areas">
        <span className="modal-text-areas-item">
          <textarea 
            id="movie-summary" 
            name="movie-summary"
            value={movieData.summary} 
            cols={30} 
            rows={10}
            className="modal-text-areas-item-text-area"
            placeholder="Enter summary.."
            onChange={(e) => setMovieData({ ...movieData, summary: e.target.value })}
          ></textarea>
        </span>

        <span className="modal-text-areas-item">
          <textarea 
            id="movie-story-shortly" 
            name="movie-story-shortly"
            value={movieData.story_shortly} 
            cols={30} 
            rows={10}
            className="modal-text-areas-item-text-area"
            placeholder="Enter story.."
            onChange={(e) => setMovieData({ ...movieData, story_shortly: e.target.value })}
          ></textarea>
        </span>
      </div>

      <button 
        className="modal-button"
        onClick={sendMovieData}
      >
        Send</button>
    </div>
  );
};

export default AddMovieAdviceModal;
