import { IMovieData } from "@components/FavoriteMovieList/types";

export interface IFavoriteMovieModuleItem {
  deleteMovieById: (filmId: number) => void;
  updateMovieWatchedById: (id: number) => void;
  movie: IMovieData;
}
