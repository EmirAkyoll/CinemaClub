import React, { useEffect, useState } from "react";
//* Styles coming from '_navigator.scss'

const Navigator = () => {

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
    </nav>
  );
};

export default Navigator;