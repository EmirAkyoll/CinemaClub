import React from "react";
import MovieField from "../../components/movies/MovieField";
import { IMovie } from "@/interfaces/imovies";
import AddMovieAdviceModal from "../../components/movies/AddMovieAdviceModal";

const index = () => {
  const movies: IMovie[] = [
    {
      name: "I Am Mother",
      publish_year: 2019,
      director: "Grant Sputore",
      time: "1:53:00",
      likes: 1279,
      dislikes: 4,
      banner_url_first: "https://images.squarespace-cdn.com/content/v1/5cf511b17678c90001d8d6e6/1609271726759-2IX0XJIHF9HTPKZ3VC7P/Raging_Bull_1sht_900x611px.jpg",
      banner_url_second: "https://m.media-amazon.com/images/M/MV5BMTkxMTczNTA4Nl5BMl5BanBnXkFtZTgwNDAyMzgwODM@._V1_.jpg"
    },
    {
      name: "Titanic",
      publish_year: 1997,
      director: "James Cameron",
      time: "3:14:00",
      likes: 56728,
      dislikes: 17,
      banner_url_first: "https://pbs.twimg.com/media/Fon8-EDXsAEv8T1?format=jpg&name=large",
      banner_url_second: "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg"
    },
    {
      name: "The Godfather",
      publish_year: 1972,
      director: "Francis Ford Coppola",
      time: "2:55:00",
      likes: 27461,
      dislikes: 7,
      banner_url_first: "https://http2.mlstatic.com/D_NQ_NP_757308-MLA52604378004_112022-O.jpg",
      banner_url_second: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/714ZOEiVNtL._RI_.jpg"
    },
    {
      name: "D filmi",
      publish_year: 1972,
      director: "someone 4",
    },
    {
      name: "E filmi",
      publish_year: 1975,
      director: "someone 5",
    },
    {
      name: "F filmi",
      publish_year: 1990,
      director: "someone 6",
    },
    {
      name: "G filmi",
      publish_year: 1994,
      director: "someone 7",
    },
    {
      name: "E filmi",
      publish_year: 1975,
      director: "someone 5",
    },
    {
      name: "F filmi",
      publish_year: 1990,
      director: "someone 6",
    },
    {
      name: "G filmi",
      publish_year: 1994,
      director: "someone 7",
    },
    {
      name: "E filmi",
      publish_year: 1975,
      director: "someone 5",
    },
    {
      name: "F filmi",
      publish_year: 1990,
      director: "someone 6",
    },
    {
      name: "G filmi",
      publish_year: 1994,
      director: "someone 7",
    },
  ];

  return (
    <>
      {/* <AddMovieAdviceModal /> */}
      <MovieField movies={movies} />
    </>
  );
};

export default index;
