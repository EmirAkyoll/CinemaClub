import React from "react";
import MovieField from "../../components/movies/MovieField";
import { IMovie } from "@/interfaces/imovies";
import AddMovieAdviceModal from "../../components/movies/AddMovieAdviceModal";

const index = () => {
  const movies: IMovie[] = [
    {
      name: "A filmi",
      publish_year: 1967,
      director: "someone 1",
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
