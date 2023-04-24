import React, { useContext, Dispatch, SetStateAction, useEffect } from "react";
import { Context } from "../../context/state";
import { BiPlus, BiMoviePlay } from "react-icons/bi";
import Link from "next/link";
import axios from "axios";
import JWT from "jsonwebtoken";
//* Styles coming from '_navigator.scss'

const Navigator: React.FC = () => {
  const { setIsNewMovieModalOpen }: Dispatch<SetStateAction<boolean>> | any = useContext(Context);
  const { currentUser, setCurrentUser }: any = useContext(Context);

  useEffect(() => {
    const decoded_user = JWT.decode(localStorage.getItem('EncodedUserDataJWT'))
    setCurrentUser(decoded_user)
    // console.log("decoded user: ", decoded_user);
  },[])

  const handleLogOut = () => {
    localStorage.removeItem('EncodedUserDataJWT')
    setCurrentUser(null)
  };

  return (
    <nav className="navigation">
      <Link href="#">
        <a className="navigation-item">Advices</a>
      </Link>

      {currentUser ? 
        (<Link href="#">
          <a className="navigation-item">Booked</a>
         </Link>) : 
        (<Link href="/auth/login">
          <a className="navigation-item">Log In</a> 
         </Link>)
      }
  
      <button 
        className={`navigation-button ${currentUser ? 'there-is-A-user' : 'there-is-NO-user'}`} 
        onClick={() => setIsNewMovieModalOpen(true)}
      >
        <BiPlus />
        <BiMoviePlay />
      </button>
      <button className='navigation-button' onClick={handleLogOut}>
        Log Out
      </button>
    </nav>
  );
};

export default Navigator;
