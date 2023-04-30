import React, { useContext, Dispatch, SetStateAction, useState } from "react";
import { Context } from "../../context/state";
import { GrClose, GrBookmark } from "react-icons/gr";
import { v4 as generate_random_id } from 'uuid';
import { IMovie } from "@/interfaces/imovies";
import { useFormik } from "formik";
import { newMovieAdviceSchema } from "../../yup/newAdvice";
import axios from "axios";
//* Styles coming from '_add-movie-advice-modal.scss'

const AddMovieAdviceModal: React.FC = () => {
  const { setIsNewMovieModalOpen, currentUser }: Dispatch<SetStateAction<boolean>> | any = useContext(Context);

  const {values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues: {
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
      comments: [],
    },
    validationSchema: newMovieAdviceSchema,
    onSubmit: sendMovieData,
  });

  async function sendMovieData() { 
    console.log("user: ",currentUser);
    await axios.post('http://localhost:3000/api/offers', values)
               .then(data => console.log(data))
               .catch(err => console.log(err))
               .finally(setIsNewMovieModalOpen(false))
  }

  return (
    <form className="modal" onSubmit={handleSubmit}>
      <div className="modal-backdrop"></div>
      <div className="modal-header">Add New Movie Offer</div>
      <button className="modal-close-button" onClick={() => setIsNewMovieModalOpen(false)}>
        <GrClose className="modal-close-button-icon"/>
      </button>

      <div className="modal-sections-wrapper">
        <div className="modal-sections-wrapper-section">
          <div className="modal-sections-wrapper-section-item">
            <input
              type="text"
              id="title"
              name="title"
              value={values.title}
              autoComplete="off"
              className="modal-sections-wrapper-section-item-textbox"
              placeholder="Enter title.."
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.title && touched.title && <p className="modal-sections-wrapper-section-item-error">{errors.title}</p>}
          </div>

          <div className="modal-sections-wrapper-section-item">
            <input
              type="text"
              id="genre"
              name="genre"
              value={values.genre}
              autoComplete="off"
              className="modal-sections-wrapper-section-item-textbox"
              placeholder="Enter genre .."
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.genre && touched.genre && <p className="modal-sections-wrapper-section-item-error">{errors.genre}</p>}
          </div>

          <div className="modal-sections-wrapper-section-item">
            <input
              type="text"
              id="duration"
              name="duration"
              value={values.duration}
              autoComplete="off"
              className="modal-sections-wrapper-section-item-textbox"
              placeholder="Duration as 'hrs:min:sec'.."
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.duration && touched.duration && <p className="modal-sections-wrapper-section-item-error">{errors.duration}</p>}
          </div>
        </div>

        <div className="modal-sections-wrapper-section">
          <div className="modal-sections-wrapper-section-item">
            <input
              type="text"
              id="release_year"
              name="release_year"
              value={values.release_year}
              autoComplete="off"
              className="modal-sections-wrapper-section-item-textbox"
              placeholder="Enter release year.."
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.release_year && touched.release_year && <p className="modal-sections-wrapper-section-item-error">{errors.release_year}</p>}
          </div>

          <div className="modal-sections-wrapper-section-item">
            <input
              type="text"
              id="imdb_rating"
              name="imdb_rating"
              value={values.imdb_rating}
              autoComplete="off"
              className="modal-sections-wrapper-section-item-textbox"
              placeholder="IMDb as ?/10.."
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.imdb_rating && touched.imdb_rating && <p className="modal-sections-wrapper-section-item-error">{errors.imdb_rating}</p>}
          </div>

          <div className="modal-sections-wrapper-section-item">
            <input
              type="text"
              id="director"
              name="director"
              value={values.director}
              autoComplete="off"
              className="modal-sections-wrapper-section-item-textbox"
              placeholder="Enter director.."
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.director && touched.director && <p className="modal-sections-wrapper-section-item-error">{errors.director}</p>}
          </div>
        </div>
      </div>

      <div className="modal-banner-urls">
        <div className="modal-banner-urls-item">
          <input
            type="text"
            id="banner_url_first"
            name="banner_url_first"
            value={values.banner_url_first}
            autoComplete="off"
            className="modal-banner-urls-item-textbox | modal-sections-wrapper-section-item-textbox"
            placeholder="Enter first banner url .."
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.banner_url_first && touched.banner_url_first && <p className="modal-banner-urls-item-error">{errors.banner_url_first}</p>}
        </div>

        <div className="modal-banner-urls-item">
          <input
            type="text"
            id="banner_url_second"
            name="banner_url_second"
            value={values.banner_url_second}
            autoComplete="off"
            className="modal-banner-urls-item-textbox | modal-sections-wrapper-section-item-textbox"
            placeholder="Enter second banner url .."
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.banner_url_second && touched.banner_url_second && <p className="modal-banner-urls-item-error">{errors.banner_url_second}</p>}
        </div>
      </div>

      <div className="modal-text-areas">
        <span className="modal-text-areas-item">
          <textarea 
            id="summary" 
            name="summary"
            value={values.summary} 
            cols={30} 
            rows={10}
            className="modal-text-areas-item-text-area"
            placeholder="Enter summary.."
            onChange={handleChange}
            onBlur={handleBlur}
          ></textarea>
          {errors.summary && touched.summary && <p className="modal-text-areas-item-error">{errors.summary}</p>}
        </span>

        <span className="modal-text-areas-item">
          <textarea 
            id="story_shortly" 
            name="story_shortly"
            value={values.story_shortly} 
            cols={30} 
            rows={10}
            className="modal-text-areas-item-text-area"
            placeholder="Enter story.."
            onChange={handleChange}
            onBlur={handleBlur}
          ></textarea>
          {errors.story_shortly && touched.story_shortly && <p className="modal-text-areas-item-error">{errors.story_shortly}</p>}
        </span>
      </div>

      <button className="modal-button" disabled={isSubmitting}>
        Send
      </button>
    </form>
  );
};

export default AddMovieAdviceModal;
