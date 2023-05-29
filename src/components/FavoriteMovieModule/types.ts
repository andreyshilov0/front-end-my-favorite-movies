import { IMovieData } from "@api/types";

export interface IFavoriteMovieModule {
  userFavoriteMovies: Array<IMovieData>;
  deleteMovieById: (id: number) => void;
  updateMovieWatchedById: (id: number) => void;
}
