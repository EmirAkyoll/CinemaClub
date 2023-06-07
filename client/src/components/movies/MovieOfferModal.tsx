import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { FormControl, Input, InputLabel, Typography } from "@mui/material";
import { MdSend } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux';
import { GrClose } from "react-icons/gr";
import { closeModal } from "../../store/movieSlice";
import { useMutation } from "@apollo/client";
import { CREATE_MOVIE } from "../../gql/mutations";
import { v4 as generate_random_id } from 'uuid';
import { newMovieAdviceSchema } from "../../yup/newAdvice";
import { useFormik } from "formik";

export default function MovieOfferModal() {
  const [createMovie, { data, loading, error }] = useMutation(CREATE_MOVIE);
    
  const movies = useSelector((state: any) => state.movies);
  const dispatch = useDispatch();
  const handleClose = () => dispatch(closeModal());

  const {values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues: {
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
    },
    validationSchema: newMovieAdviceSchema,
    onSubmit: sendMovie,
  });

  function sendMovie(){
    createMovie({
        variables: {
          "id": generate_random_id(),
          "title": values.title,
          "bannerUrlFirst": values.banner_url_first,
          "bannerUrlSecond": values.banner_url_second,
          "duration": values.duration,
          "releaseYear": parseInt(values.release_year),
          "imdbRating": values.imdb_rating,
          "likes": 0,
          "dislikes": 0,
          "genre": values.genre,
          "director": values.director,
          "summary": values.summary,
          "storyShortly": values.story_shortly,
          "comments": [],
          "as": "offer"
        } 
    });
  }

  return (
    <div>
      <Modal
        open={movies.isModalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        // sx={{w: '500px'}}
      >
        <form 
          onSubmit={handleSubmit}
          style={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "500px",
            backgroundColor: "#000",
            border: "3px solid white",
            boxShadow: "24px",
            padding: 4,
            paddingTop: 0
        }}>

          <GrClose style={{ color: 'white', width: '20px', height: '20px', float: 'right' }} />

          <Typography 
                variant="h4" 
                sx={{ 
                    color: 'white', 
                    textAlign: 'center', 
                    paddingTop: '25px', 
                    paddingBottom: '10px' 
                }}
          >
            Movie Offer
          </Typography>

          <Box sx={{ display: 'flex', gap: '15px', ml: '15px'}}>
          <Box>
            <FormControl sx={{ width: "25ch", mt: "15px" }} variant="standard">
              <InputLabel style={{ color: "white" }} htmlFor="standard-adornment-title">
                Title
              </InputLabel>
              <Input
                autoComplete="false"
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
                id="standard-adornment-title"
                name="title"
                sx={{ color: "white", borderColor: "white", borderBottom: "1px solid #aaa",}}
              />
              {errors.title && touched.title && <p className="auth-module-section-error">{errors.title}</p>}
            </FormControl>
            <FormControl sx={{ width: "25ch", mt: "15px" }} variant="standard">
              <InputLabel style={{ color: "white" }} htmlFor="standard-adornment-genre">
                Genre
              </InputLabel>
              <Input
                autoComplete="false"
                value={values.genre}
                onChange={handleChange}
                onBlur={handleBlur}
                id="standard-adornment-genre"
                name="genre"
                sx={{ color: "white", borderColor: "white", borderBottom: "1px solid #aaa",}}
              />
              {errors.genre && touched.genre && <p className="auth-module-section-error">{errors.genre}</p>}
            </FormControl>
            <FormControl sx={{ width: "25ch", mt: "15px" }} variant="standard">
              <InputLabel style={{ color: "white" }} htmlFor="standard-adornment-duration">
                Duration
              </InputLabel>
              <Input
                autoComplete="false"
                value={values.duration}
                onChange={handleChange}
                onBlur={handleBlur}
                id="standard-adornment-duration"
                name="duration"
                sx={{ color: "white", borderColor: "white", borderBottom: "1px solid #aaa",}}
              />
              {errors.duration && touched.duration && <p className="auth-module-section-error">{errors.duration}</p>}
            </FormControl>
          </Box>
          <Box>
            <FormControl sx={{ width: "25ch", mt: "15px" }} variant="standard">
              <InputLabel style={{ color: "white" }} htmlFor="standard-adornment-release_year">
                Release Year
              </InputLabel>
              <Input
                autoComplete="false"
                value={values.release_year}
                onChange={handleChange}
                onBlur={handleBlur}
                id="standard-adornment-release_year"
                name="release_year"
                sx={{ color: "white", borderColor: "white", borderBottom: "1px solid #aaa",}}
              />
              {errors.release_year && touched.release_year && <p className="auth-module-section-error">{errors.release_year}</p>}
            </FormControl>
            <FormControl sx={{ width: "25ch", mt: "15px" }} variant="standard">
              <InputLabel style={{ color: "white" }} htmlFor="standard-adornment-imdb_rating">
                IMDb as ?/10
              </InputLabel>
              <Input
                autoComplete="false"
                value={values.imdb_rating}
                onChange={handleChange}
                onBlur={handleBlur}
                id="standard-adornment-imdb_rating"
                name="imdb_rating"
                sx={{ color: "white", borderColor: "white", borderBottom: "1px solid #aaa",}}
              />
              {errors.imdb_rating && touched.imdb_rating && <p className="auth-module-section-error">{errors.imdb_rating}</p>}
            </FormControl>
            <FormControl sx={{ width: "25ch", mt: "15px" }} variant="standard">
              <InputLabel style={{ color: "white" }} htmlFor="standard-adornment-director">
                Director
              </InputLabel>
              <Input
                autoComplete="false"
                value={values.director}
                onChange={handleChange}
                onBlur={handleBlur}
                id="standard-adornment-director"
                name="director"
                sx={{ color: "white", borderColor: "white", borderBottom: "1px solid #aaa",}}
              />
              {errors.director && touched.director && <p className="auth-module-section-error">{errors.director}</p>}
            </FormControl>
          </Box>
          </Box>    
          <Box sx={{mt: '15px'}}>
            <FormControl sx={{ width: "93%", mt: "15px", ml: "15px" }} variant="standard">
              <InputLabel style={{ color: "white" }} htmlFor="standard-adornment-banner_url_first">
                Banner (First)
              </InputLabel>
              <Input
                autoComplete="false"
                value={values.banner_url_first}
                onChange={handleChange}
                onBlur={handleBlur}
                id="standard-adornment-banner_url_first"
                name="banner_url_first"
                sx={{ color: "white", borderColor: "white", borderBottom: "1px solid #aaa",}}
              />
              {errors.banner_url_first && touched.banner_url_first && <p className="auth-module-section-error">{errors.banner_url_first}</p>}
            </FormControl>
            <FormControl sx={{ width: "93%", mt: "25px", ml: "15px" }} variant="standard">
              <InputLabel style={{ color: "white" }} htmlFor="standard-adornment-banner_url_second">
                Banner (Second)
              </InputLabel>
              <Input
                autoComplete="false"
                value={values.banner_url_second}
                onChange={handleChange}
                onBlur={handleBlur}
                id="standard-adornment-banner_url_second"
                name="banner_url_second"
                sx={{ color: "white", borderColor: "white", borderBottom: "1px solid #aaa",}}
              />
              {errors.banner_url_second && touched.banner_url_second && <p className="auth-module-section-error">{errors.banner_url_second}</p>}
            </FormControl>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-around', ml: '15px' }}>
          <FormControl sx={{ width: "90%", mt: "15px" }} variant="standard">
              <InputLabel style={{ color: "white" }} htmlFor="standard-adornment-summary">
                Summary
              </InputLabel>
              <Input
                multiline
                rows={4}
                autoComplete="false"
                value={values.summary}
                onChange={handleChange}
                onBlur={handleBlur}
                id="standard-adornment-summary"
                name="summary"
                sx={{ color: "white", borderColor: "white", borderBottom: "1px solid #aaa", width: '92%'}}
              />
              {errors.summary && touched.summary && <p className="auth-module-section-error">{errors.summary}</p>}
            </FormControl>
            <FormControl sx={{ width: "90%", mt: "15px" }} variant="standard">
              <InputLabel style={{ color: "white" }} htmlFor="standard-adornment-story_shortly">
                Story Shortly
              </InputLabel>
              <Input
                multiline
                rows={4}
                autoComplete="false"
                value={values.story_shortly}
                onChange={handleChange}
                onBlur={handleBlur}
                id="standard-adornment-story_shortly"
                name="story_shortly"
                sx={{ color: "white", borderColor: "white", borderBottom: "1px solid #aaa", width: '92%'}}
              />
              {errors.story_shortly && touched.story_shortly && <p className="auth-module-section-error">{errors.story_shortly}</p>}
            </FormControl>
          </Box>
        <Button 
            variant="contained" 
            endIcon={<MdSend />}
            sx={{ 
                width: '100%', 
                marginTop: '35px',
                marginBottom: '15px',
                bgcolor: '#000',
                border: '1px solid #bbb'
            }}
            onClick={() => {
              sendMovie();
              dispatch(closeModal())} 
            }
            disabled={isSubmitting}
        >
            Send
        </Button>
        </form>
      </Modal>
    </div>
  );
}
