import { IMovieData } from "@components/FavoriteMovieList/types";

export interface IFavoriteMovieModule {
  userFavoriteMovies: Array<IMovieData>;
  deleteMovieById: (id: number) => void;
  updateMovieWatchedById: (id: number) => void;
}
