import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { MdOutlineExpandMore } from "react-icons/md";
import { Box, Button, Container } from "@mui/material";
import { useMutation, useQuery } from "@apollo/client";
import { GET_OFFERS } from "../../gql/queries";
import { CREATE_MOVIE, DELETE_MOVIE_OFFER } from "../../gql/mutations";

export default function ControlledAccordions() {
  const [deleteOffer, { data: delete_data, loading: delete_loading, error: delete_error }] = useMutation(DELETE_MOVIE_OFFER);
  const [createMovie, { data: create_data, loading: create_loading, error: create_error }] = useMutation(CREATE_MOVIE);

  const [expanded, setExpanded] = useState<string | false>(false);
  const { loading, error, data } = useQuery(GET_OFFERS);
  // console.log("offers: ", data?.getOffers);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  function deleteMovieOffer(arg_offer_id: any){
    try {
      deleteOffer({
        variables: {
          "offerId": arg_offer_id,
        } 
    });
    } catch (error) {
      console.log(error);
    }
  }

  function createAsMovie(arg_id: string, arg_title: string, arg_banner_url_first: string, arg_banner_url_second: string,
                         arg_duration: string, arg_release_year: string, arg_imdb_rating: string, arg_genre: string,
                         arg_director: string, arg_summary: string, arg_story_shortly: string){
    try {
      createMovie({
        variables: {
          "id": arg_id,
          "title": arg_title,
          "bannerUrlFirst": arg_banner_url_first,
          "bannerUrlSecond": arg_banner_url_second,
          "duration": arg_duration,
          "releaseYear": parseInt(arg_release_year),
          "imdbRating": arg_imdb_rating,
          "likes": 0,
          "dislikes": 0,
          "genre": arg_genre,
          "director": arg_director,
          "summary": arg_summary,
          "storyShortly": arg_story_shortly,
          "comments": [],
          "as": "advice"
        }
    });

    deleteMovieOffer(arg_id);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container sx={{ paddingBottom: '35px', paddingTop: '35px' }}>
      {data?.getOffers?.map((offer: any, index: string) => (
        <Accordion key={offer._id} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
          <AccordionSummary
            expandIcon={<MdOutlineExpandMore />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "10%", flexShrink: 0 }}>OFFER</Typography>
            <Typography sx={{ color: "text.secondary", marginLeft: "30%" }}>{offer.title}</Typography>
            <Box sx={{ marginLeft: '20%' }}>
                <Button 
                  variant="contained" 
                  color="success" 
                  onClick={(e) => {
                    e.stopPropagation();
                    createAsMovie(offer._id, offer.title, offer.banner_url_first, offer.banner_url_second,
                                  offer.duration, offer.release_year, offer.imdb_rating, offer.genre,
                                  offer.director, offer.summary, offer.story_shortly)
                    }}>
                    Add to Advices
                </Button>

                <Button 
                  variant="contained" 
                  color="error" 
                  sx={{ marginLeft: '15px' }} 
                  onClick={(e) => {
                      e.stopPropagation(); 
                      deleteMovieOffer(offer._id)
                  }}
                >
                    Reject
                </Button>
            </Box>
          </AccordionSummary>
          <hr style={{ marginTop: "0px" }} />
          <AccordionDetails sx={{ textAlign: 'justify', padding: '30px' }}>
            <Typography sx={{ marginTop: '7px', marginBottom: '7px' }}> Title: {offer.title} </Typography>
            <Typography sx={{ marginTop: '7px', marginBottom: '7px' }}> Genre: {offer.genre} </Typography>
            <Typography sx={{ marginTop: '7px', marginBottom: '7px' }}> Duration: {offer.duration} </Typography>
            <Typography sx={{ marginTop: '7px', marginBottom: '7px' }}> Director: {offer.director} </Typography>
            <Typography sx={{ marginTop: '7px', marginBottom: '7px' }}> IMDb Rating: {offer.imdb_rating} </Typography>
            <Typography sx={{ marginTop: '7px', marginBottom: '7px' }}> Release Year: {offer.release_year} </Typography>
            <Typography sx={{ marginTop: '7px', marginBottom: '7px' }}> First Banner: {offer.banner_url_first} </Typography>
            <Typography sx={{ marginTop: '7px', marginBottom: '7px' }}> Second Banner: {offer.banner_url_second} </Typography>
            <Typography sx={{ marginTop: '7px', marginBottom: '7px' }}> Summary: {offer.summary} </Typography>
            <Typography sx={{ marginTop: '7px', marginBottom: '7px' }}> Story: {offer.story_shortly} </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
}
