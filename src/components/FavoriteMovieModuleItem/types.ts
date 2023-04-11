import { IMovieData } from "@api/types";

export interface IFavoriteMovieModuleItem {
  deleteMovieById: (filmId: number) => void;
  handleWatchedMovie: (id: number) => void;
  movie: IMovieData;
}
