import React, { useContext, Dispatch, SetStateAction, useState } from "react";
import { Context } from "../../context/state";
import { GrClose, GrCheckmark } from "react-icons/gr";
import axios from "axios";
import { IMovie } from "@/interfaces/imovies";

export async function getServerSideProps() {
  const response = await axios.get("http://localhost:3000/api/offers");
  const offers = response.data;
console.log("offers aga: ", offers);

  return {
    props: {
      offers,
    },
  };
}

const OffersModal: React.FC<IMovie | any> = ({ offers }) => {
  const { setIsNewMovieModalOpen, currentUser }: Dispatch<SetStateAction<boolean>> | any = useContext(Context);
console.log("offers agas:",offers);

  function acceptMovieOffer() {}

  function rejectMovieOffer() {}

  return (
    <div className="modal">
      <div className="modal-backdrop"></div>
      <div className="modal-header">Add New Movie Advice</div>
      <button
        className="modal-close-button"
        onClick={() => setIsNewMovieModalOpen(false)}
      >
        <GrClose className="modal-close-button-icon" />
      </button>

      <div className="modal-movie">
        {offers?.map((offer: any) => (
          <div className="modal-movie-data">
            <div className="modal-movie-data-item">
              <p className="modal-movie-data-item-title">Title:</p>
              <p className="modal-movie-data-item-content">{offer.title}</p>
            </div>
            <div className="modal-movie-data-item">
              <p className="modal-movie-data-item-title">Genre:</p>
              <p className="modal-movie-data-item-content">{offer.genre}</p>
            </div>
            <div className="modal-movie-data-item">
              <p className="modal-movie-data-item-title">Duration</p>
              <p className="modal-movie-data-item-content">{offer.duration}</p>
            </div>
            <div className="modal-movie-data-item">
              <p className="modal-movie-data-item-title">Release Year:</p>
              <p className="modal-movie-data-item-content">{offer.release_year}</p>
            </div>
            <div className="modal-movie-data-item">
              <p className="modal-movie-data-item-title">IMDb:</p>
              <p className="modal-movie-data-item-content">{offer.imdb_rating}</p>
            </div>
            <div className="modal-movie-data-item">
              <p className="modal-movie-data-item-title">Director:</p>
              <p className="modal-movie-data-item-content">{offer.director}</p>
            </div>
            <div className="modal-movie-data-item">
              <p className="modal-movie-data-item-title">First Banner:</p>
              <p className="modal-movie-data-item-content">{offer.banner_url_first}</p>
            </div>
            <div className="modal-movie-data-item">
              <p className="modal-movie-data-item-title">Second Banner:</p>
              <p className="modal-movie-data-item-content">{offer.banner_url_second}</p>
            </div>
            <div className="modal-movie-data-item">
              <p className="modal-movie-data-item-title">Summary:</p>
              <p className="modal-movie-data-item-content">{offer.summary}</p>
            </div>
            <div className="modal-movie-data-item">
              <p className="modal-movie-data-item-title">Story Shortly:</p>
              <p className="modal-movie-data-item-content">{offer.story_shortly}</p>
            </div>

            <button className="modal-button" onClick={acceptMovieOffer}>
              <GrCheckmark />
            </button>
            <button className="modal-button" onClick={rejectMovieOffer}>
              <GrClose />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OffersModal;
