export interface IMovie {
  name: string;
  genre?: string;
  banner?: string;
  time?: string;
  publish_year: number;
  imdb_score?: number;
  director: string;
}

export interface IMovieCardsProps {
  movies: IMovie[];
}

export interface IMovieCardProps {
  movie: IMovie;
}
