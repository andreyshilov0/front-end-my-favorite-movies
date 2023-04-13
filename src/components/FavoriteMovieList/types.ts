import { IMovieData } from "@api/types";

export interface IFavoriteMovieList {
  deleteMovieById: (filmId: number) => void;
  moviesData: IMovieData[];
}
