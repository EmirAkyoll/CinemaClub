import React from 'react'
import MovieField from "../../components/movies/MovieField";

const index = () => {
  const movies = [
    {
      name: 'A filmi',
      year: 1967,
      director: 'someone 1'
    },
    {
      name: 'B filmi',
      year: 1967,
      director: 'someone 2'
    },
    {
      name: 'C filmi',
      year: 2021,
      director: 'someone 3'
    },
    {
      name: 'D filmi',
      year: 2016,
      director: 'someone 4'
    },
    {
      name: 'E filmi',
      year: 1975,
      director: 'someone 5'
    },
    {
      name: 'F filmi',
      year: 1990,
      director: 'someone 6'
    },
    {
      name: 'G filmi',
      year: 1994,
      director: 'someone 7'
    },
    {
      name: 'E filmi',
      year: 1975,
      director: 'someone 5'
    },
    {
      name: 'F filmi',
      year: 1990,
      director: 'someone 6'
    },
    {
      name: 'G filmi',
      year: 1994,
      director: 'someone 7'
    },
    {
      name: 'E filmi',
      year: 1975,
      director: 'someone 5'
    },
    {
      name: 'F filmi',
      year: 1990,
      director: 'someone 6'
    },
    {
      name: 'G filmi',
      year: 1994,
      director: 'someone 7'
    },
  ]
  return (
    <>
      <MovieField movies={movies}/>
    </>
  )
}

export default index
