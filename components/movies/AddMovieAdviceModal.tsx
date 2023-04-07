import React from "react";
//* Styles coming from '_add-movie-advice-modal.scss'

const AddMovieAdviceModal: React.FC = () => {
  return (
    <div className="modal">
      <div className="modal-header">Add New Movie Advice</div>

      <div className="modal-sections-wrapper">
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
      </div>

      <div className="modal-banner-urls">
        <div className="modal-banner-urls-item">
          <label htmlFor="movie-banner-first" className="modal-banner-urls-item-label">
            Banner URL (First):
          </label>
          <input
            type="text"
            id="movie-banner-first"
            name="movie-banner-first"
            className="modal-banner-urls-item-textbox | modal-sections-wrapper-section-item-textbox"
            placeholder="Enter first banner url .."
          />
        </div>

        <div className="modal-banner-urls-item">
          <label htmlFor="movie-banner-second" className="modal-banner-urls-item-label">
            Banner URL (Second):
          </label>
          <input
            type="text"
            id="movie-banner-second"
            name="movie-banner-second"
            className="modal-banner-urls-item-textbox | modal-sections-wrapper-section-item-textbox"
            placeholder="Enter second banner url .."
          />
        </div>
      </div>

      <div className="modal-text-areas">
        <span className="modal-text-areas-item">
          <label htmlFor="movie-summary" className="modal-text-areas-item-label">
            Summary:
          </label>
          <textarea 
            name="movie-summary" 
            id="movie-summary" 
            cols={30} 
            rows={10}
            className="modal-text-areas-item-text-area"
            placeholder="Enter summary.."
          ></textarea>
        </span>

        <span className="modal-text-areas-item">
          <label htmlFor="movie-story-shortly" className="modal-text-areas-item-label">
            Story Shortly:
          </label>
          <textarea 
            name="movie-story-shortly" 
            id="movie-story-shortly" 
            cols={30} 
            rows={10}
            className="modal-text-areas-item-text-area"
            placeholder="Enter story.."
          ></textarea>
        </span>
      </div>

      <button className="modal-button">Send</button>
    </div>
  );
};

export default AddMovieAdviceModal;
