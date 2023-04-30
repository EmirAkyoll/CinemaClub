export interface IMovie {
  _id: string;
  title: string;
  banner_url_first?: string;
  banner_url_second?: string;
  duration: string;
  release_year: number | string;
  imdb_rating: string;
  likes: number;
  dislikes: number;
  genre: string[] | string;
  director: string;
  summary: string;
  story_shortly: string;
  comments: string[];
}

export interface IMovieCardsProps {
  movies: IMovie[];
}

export interface IMovieCardProps {
  movie: IMovie;
}
