export interface IMovie {
  _id?: string;
  title: string;
  banner_url_first?: string;
  banner_url_second?: string;
  duration?: string;
  release_year: number;
  imdb_rating?: string;
  likes?: number;
  dislikes?: number;
  genre?: string[];
  director?: string;
  summary?: string;
  story_shortly?: string;
}

export interface IMovieCardsProps {
  movies: IMovie[];
}

export interface IMovieCardProps {
  movie: IMovie;
}
