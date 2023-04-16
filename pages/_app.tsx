import type { AppProps } from "next/app";
import { useState } from "react";
import { Context } from "../context/state";
import { IMovie } from "@/interfaces/imovies";
import Layout from "../layout/Layout";
import "../styles/main.scss";

export default function App({ Component, pageProps }: AppProps) {
  const [isNewMovieModalOpen, setIsNewMovieModalOpen] = useState<boolean>(false);
  const [chosenMovie, setChosenMovie] = useState<IMovie>();

  return (
    <Context.Provider value={{
       isNewMovieModalOpen, setIsNewMovieModalOpen,
       chosenMovie, setChosenMovie
    }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Context.Provider>
  );
}
