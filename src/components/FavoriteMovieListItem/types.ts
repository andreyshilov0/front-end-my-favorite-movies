import { IMovieData } from "@api/types";

export interface IFavoriteMovieListItem {
  deleteMovieById: (filmId: number) => void;
  movie: IMovieData;
  updateMovieWatchedById: (id: number) => void;
}
