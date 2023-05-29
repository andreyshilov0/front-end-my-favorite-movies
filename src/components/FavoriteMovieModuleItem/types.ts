import { IMovieData } from "@api/types";

export interface IFavoriteMovieModuleItem {
  deleteMovieById: (filmId: number) => void;
  updateMovieWatchedById: (id: number) => void;
  movie: IMovieData;
}
