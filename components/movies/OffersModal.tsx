import React, { useContext, Dispatch, SetStateAction, useState, useEffect } from "react";
import { Context } from "../../context/state";
import { GrClose, GrCheckmark } from "react-icons/gr";
import { IMovie } from "@/interfaces/imovies";
import axios from "axios";

const OffersModal: React.FC<IMovie | any> = () => {
  const { setIsNewMovieModalOpen, currentUser }: Dispatch<SetStateAction<boolean>> | any = useContext(Context);
  const [offers, setOffers] = useState<IMovie | any>();

  useEffect(() => {
    async function getAllOffers(){
      const res_offers = await axios.get('http://localhost:3000/api/offers')
      setOffers(res_offers.data)
        console.log("offerdir bu yaw: ",res_offers.data);
    }

    getAllOffers();
  }, []);

  async function acceptMovieOffer(movie: IMovie) {
    await axios.post('http://localhost:3000/api/movies', movie)
               .then(data => console.log(data))
               .catch(err => console.log(err))
               .finally(setIsNewMovieModalOpen(false))
  }

  async function rejectMovieOffer(movie_id: string) {
    await axios.delete(`http://localhost:3000/api/offers/${movie_id}`)
               .then(data => console.log(data))
               .catch(err => console.log(err))
               .finally(setIsNewMovieModalOpen(false))
  }

  return (
    <div className="modal">
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
              <p className="modal-movie-data-item-content">
                {offer.release_year}
              </p>
            </div>
            <div className="modal-movie-data-item">
              <p className="modal-movie-data-item-title">IMDb:</p>
              <p className="modal-movie-data-item-content">
                {offer.imdb_rating}
              </p>
            </div>
            <div className="modal-movie-data-item">
              <p className="modal-movie-data-item-title">Director:</p>
              <p className="modal-movie-data-item-content">{offer.director}</p>
            </div>
            <div className="modal-movie-data-item">
              <p className="modal-movie-data-item-title">First Banner:</p>
              <p className="modal-movie-data-item-content">
                {offer.banner_url_first}
              </p>
            </div>
            <div className="modal-movie-data-item">
              <p className="modal-movie-data-item-title">Second Banner:</p>
              <p className="modal-movie-data-item-content">
                {offer.banner_url_second}
              </p>
            </div>
            <div className="modal-movie-data-item">
              <p className="modal-movie-data-item-title">Summary:</p>
              <p className="modal-movie-data-item-content">{offer.summary}</p>
            </div>
            <div className="modal-movie-data-item">
              <p className="modal-movie-data-item-title">Story Shortly:</p>
              <p className="modal-movie-data-item-content">
                {offer.story_shortly}
              </p>
            </div>

            <div className="modal-movie-data-buttons">
                <button className="modal-movie-data-buttons-item" onClick={() => acceptMovieOffer(offer)}>
                  <GrCheckmark />
                </button>
                <button className="modal-movie-data-buttons-item" onClick={() => rejectMovieOffer(offer._id)}>
                  <GrClose />
                </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OffersModal;
