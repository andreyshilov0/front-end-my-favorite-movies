import { IMovieData } from "@api/types";

export interface IFavoriteMovieModule {
  userFavoriteMovies: Array<IMovieData>;
  deleteMovieById: any;
  updateMovieWatchedById: any
}
