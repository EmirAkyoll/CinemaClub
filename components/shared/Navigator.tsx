import React from "react";
import Link from "next/link";
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
      <Link href="/movie/:id">
       <p className="navigation-item">Nakkara</p> 
      </Link>

      <button className="navigation-button">
        <BiPlus />
        <BiMoviePlay />
      </button>
    </nav>
  );
};

export default Navigator;
