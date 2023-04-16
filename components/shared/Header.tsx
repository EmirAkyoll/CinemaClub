import React, { useContext, Dispatch, SetStateAction } from "react";
import { Context } from "../../context/state";
import Navigator from "./Navigator";
import Image from "next/image";
import Link from "next/link";
import { BsFilm } from "react-icons/bs";
//* Styles coming from '_header-comp.scss'

const Header: React.FC = () => {
  const { setIsNewMovieModalOpen }: Dispatch<SetStateAction<boolean>> | any = useContext(Context);

  return (
    <header className="header">
      <Link href="/">
        <span className="header-logo">
          {/* <Image
          src="/movies-icon.png"
          alt="movie-logo"
          className="header-logo-image"
          width={60}
          height={60}
        /> */}
          {/* <img 
          src="/movies-icon.png" 
          alt="movie-logo" 
          className='header-logo-image'
        /> */}
          <BsFilm className="header-logo-image" />
          <p className="header-logo-text">Movie Advicer</p>
        </span>
      </Link>

      <Navigator />
    </header>
  );
};

export default Header;
