export interface IGenreData {
  id: number;
  name: string;
}

export interface IMovieData {
  adult: false;
  backdrop_path: string;
  genre_id: number[];
  id: number;
  media_type?: string;
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_avarage: number;
  vote_count: number;
  user_watched: boolean;
}

export interface IMovieDataReponse extends IMovieData {
  year: number;
  page: number;
  genresId: Array<number>;
  range: number;
}
