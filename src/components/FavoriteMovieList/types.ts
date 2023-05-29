import { IMovieData } from "@api/types";

export interface IFavoriteMovieList {
  deleteMovieById: any
  userFavoriteMovies: IMovieData[];
  updateMovieWatchedById: (id: number) => void;
}
