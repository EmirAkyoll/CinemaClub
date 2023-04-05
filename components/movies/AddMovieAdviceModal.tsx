import React from "react";
//* Styles coming from '_add-movie-advice-modal.scss'

const AddMovieAdviceModal = () => {
  return (
    <div className="modal">
      <div className="modal-header">Add New Movie Advice</div>

      <form className="modal-sections-wrapper">
        <div className="modal-sections-wrapper-section">
          <div className="modal-sections-wrapper-section-item">
            <label htmlFor="movie-name" className="modal-sections-wrapper-section-item-label">
              Name:
            </label>
            <input
              type="text"
              id="movie-name"
              name="movie-name"
              className="modal-sections-wrapper-section-item-textbox"
              placeholder="Enter movie name.."
            />
          </div>

          <div className="modal-sections-wrapper-section-item">
            <label htmlFor="movie-genre" className="modal-sections-wrapper-section-item-label">
              Genre:
            </label>
            <input
              type="text"
              id="movie-genre"
              name="movie-genre"
              className="modal-sections-wrapper-section-item-textbox"
              placeholder="Enter movie genre .."
            />
          </div>

          <div className="modal-sections-wrapper-section-item">
            <label htmlFor="movie-time" className="modal-sections-wrapper-section-item-label">
              Time:
            </label>
            <input
              type="text"
              id="movie-time"
              name="movie-time"
              className="modal-sections-wrapper-section-item-textbox"
              placeholder="Enter time.."
            />
          </div>
        </div>

        <div className="modal-sections-wrapper-section">
          <div className="modal-sections-wrapper-section-item">
            <label htmlFor="movie-publish-year" className="modal-sections-wrapper-section-item-label">
              Publish Year:
            </label>
            <input
              type="text"
              id="movie-publish-year"
              name="movie-publish-year"
              className="modal-sections-wrapper-section-item-textbox"
              placeholder="Enter publish-year.."
            />
          </div>

          <div className="modal-sections-wrapper-section-item">
            <label htmlFor="movie-imdb-score" className="modal-sections-wrapper-section-item-label">
              IMDB Score:
            </label>
            <input
              type="text"
              id="movie-imdb-score"
              name="movie-imdb-score"
              className="modal-sections-wrapper-section-item-textbox"
              placeholder="Enter imbd score.."
            />
          </div>

          <div className="modal-sections-wrapper-section-item">
            <label htmlFor="movie-director" className="modal-sections-wrapper-section-item-label">
              Director:
            </label>
            <input
              type="text"
              id="movie-director"
              name="movie-director"
              className="modal-sections-wrapper-section-item-textbox"
              placeholder="Enter director.."
            />
          </div>
        </div>
      </form>

      <div className="modal-sections-wrapper-section-item">
        <label htmlFor="movie-banner" className="modal-sections-wrapper-section-item-label">
          Banner URL:
        </label>
        <input
          type="text"
          id="movie-banner"
          name="movie-banner"
          className="modal-sections-wrapper-section-item-textbox"
          placeholder="Enter banner url .."
        />
      </div>

      <button className="modal-button">Add</button>
    </div>
  );
};

export default AddMovieAdviceModal;
