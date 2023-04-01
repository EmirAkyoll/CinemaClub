import React from "react";
// Styles coming from '_navigator.scss'

const Navigator = () => {
  function themeToggle() {
    document.documentElement.style.setProperty('themeMode', 'dark')
  }

  return (
    <nav className="navigation">
      <a href="#" className="navigation-item">Advices</a>
      <a href="#" className="navigation-item">Booked</a>
      <a href="#" className="navigation-item">Nakkara</a>

      <button 
        className="navigation-theme-mode-toggle" 
        onClick={() => {themeToggle()} }
      >
        Light Mode
      </button>
    </nav>
  );
};

export default Navigator;
