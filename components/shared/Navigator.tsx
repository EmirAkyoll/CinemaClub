import React from "react";
import { BiPlus, BiMoviePlay } from "react-icons/bi";
//* Styles coming from '_navigator.scss'

const Navigator: React.FC = () => {
  return (
    <nav className="navigation">
      <a href="#" className="navigation-item">
        Advices
      </a>
      <a href="#" className="navigation-item">
        Booked
      </a>
      <a href="#" className="navigation-item">
        Nakkara
      </a>

      <button className="navigation-button">
        <BiPlus />
        <BiMoviePlay />
      </button>
    </nav>
  );
};

export default Navigator;
