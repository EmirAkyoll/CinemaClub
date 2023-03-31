import React from 'react'
import Navigator from './Navigator';
//* Styles coming from '_header-comp.scss'

const Header = () => {
  return (
    <header className='header'>
      <span className='header-logo'>
        <img 
          src="https://cdn-icons-png.flaticon.com/512/3947/3947039.png" 
          alt="movie-logo" 
          className='header-logo-image'
        />
        <p className='header-logo-text'>Movie Advicer</p>
      </span>

      <Navigator />
    </header>
  )
}

export default Header;
