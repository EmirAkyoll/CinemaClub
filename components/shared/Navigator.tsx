import React, { useContext, Dispatch, SetStateAction, useEffect } from "react";
import { Context } from "../../context/state";
import { BiPlus, BiMoviePlay } from "react-icons/bi";
import Link from "next/link";
import axios from "axios";
import JWT from "jsonwebtoken";
import { useRouter } from "next/router";
//* Styles coming from '_navigator.scss'

const Navigator: React.FC = () => {
  const { setIsNewMovieModalOpen }: Dispatch<SetStateAction<boolean>> | any = useContext(Context);
  const { currentUser, setCurrentUser }: any = useContext(Context);
  const router = useRouter();

  useEffect(() => {    
    const decoded_user = JWT.decode(localStorage.getItem("EncodedUserDataJWT"));
    setCurrentUser(decoded_user);
  }, []);

  const handleLogOut = () => {
    router.push('/')
    localStorage.removeItem("EncodedUserDataJWT");
    setCurrentUser(null);
  };

  return (
    <nav className="navigation">
      <Link href="/">
        <a className="navigation-item">Advices</a>
      </Link>

      {currentUser && !currentUser?.isAdmin ? (
        <Link href="/booked">
          <a className="navigation-item">Booked</a>
        </Link>) : 
       currentUser && currentUser?.isAdmin ? (
        <Link href="/offers">
          <a className="navigation-item">Offers</a>
        </Link>
      ) : 
      (<Link href="/auth/login">
          <a className="navigation-item">Log In</a>
        </Link>
      )}

      <button className="navigation-button" onClick={handleLogOut}>
        Log Out
      </button>
    </nav>
  );
};

export default Navigator;
