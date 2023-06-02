import { IMovieData } from "@components/FavoriteMovieList/types";

export interface IFavoriteMovieListItem {
  deleteMovieById: (filmId: number) => void;
  movie: IMovieData;
  updateMovieWatchedById: (id: number) => void;
}
