import React from "react";
import Navigator from "./Navigator";
import Image from "next/image";
//* Styles coming from '_header-comp.scss'

const Header: React.FC = () => {
  return (
    <header className="header">
      <span className="header-logo">
        {/* <Image
          src="/movies-icon.png"
          alt="movie-logo"
          className="header-logo-image"
          width={60}
          height={60}
        /> */}
        <img 
          src="/movies-icon.png" 
          alt="movie-logo" 
          className='header-logo-image'
        />
        <p className="header-logo-text">Movie Advicer</p>
      </span>

      <Navigator />
    </header>
  );
};

export default Header;
