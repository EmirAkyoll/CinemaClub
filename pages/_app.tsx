import type { AppProps } from "next/app";
import { useState } from "react";
import { Context } from "../context/state";
import { IMovie } from "@/interfaces/imovies";
import { IUser } from "@/interfaces/iusers";
import Layout from "../layout/Layout";
import "../styles/main.scss";

export default function App({ Component, pageProps }: AppProps) {
  const [isNewMovieModalOpen, setIsNewMovieModalOpen] = useState<boolean>(false);
  const [chosenMovie, setChosenMovie] = useState<IMovie>();
  const [currentUser, setCurrentUser] = useState<IUser>();

  return (
    <Context.Provider value={{
       isNewMovieModalOpen, setIsNewMovieModalOpen,
       chosenMovie, setChosenMovie,
       currentUser, setCurrentUser
    }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Context.Provider>
  );
}
