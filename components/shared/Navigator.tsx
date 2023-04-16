import React, { useContext, Dispatch, SetStateAction } from "react";
import { Context } from "../../context/state";
import Link from "next/link";
import { BiPlus, BiMoviePlay } from "react-icons/bi";
//* Styles coming from '_navigator.scss'

const Navigator: React.FC = () => {
  const { setIsNewMovieModalOpen }: Dispatch<SetStateAction<boolean>> | any = useContext(Context);

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

      <button 
        className="navigation-button"
        onClick={() => setIsNewMovieModalOpen(true)}  
      >
        <BiPlus />
        <BiMoviePlay />
      </button>
    </nav>
  );
};

export default Navigator;
