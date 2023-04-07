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
      banner_url_first: "https://images.squarespace-cdn.com/content/v1/5cf511b17678c90001d8d6e6/1609271726759-2IX0XJIHF9HTPKZ3VC7P/Raging_Bull_1sht_900x611px.jpg",
      banner_url_second: "https://m.media-amazon.com/images/M/MV5BMTkxMTczNTA4Nl5BMl5BanBnXkFtZTgwNDAyMzgwODM@._V1_.jpg"
    },
    {
      name: "B filmi",
      publish_year: 1967,
      director: "someone 2",
    },
    {
      name: "C filmi",
      publish_year: 2021,
      director: "someone 3",
    },
    {
      name: "D filmi",
      publish_year: 2016,
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
