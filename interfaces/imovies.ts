export interface IMovie {
  id?: string;
  name: string;
  banner_url_first?: string;
  banner_url_second?: string;
  time?: string;
  publish_year: number;
  imdb_score?: string;
  likes?: number;
  dislikes?: number;
  genre?: string;
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
