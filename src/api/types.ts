export interface IGenreData {
  id: number;
  name: string;
}

export interface IMovieData {
  id: number;
  description: string;
  imageUrl: string;
  year: string;
  title: string;
  watched: boolean;
}

export interface IMovieDataReponse extends IMovieData {
  page: number;
  genresId: Array<number>;
  range: number;
}
