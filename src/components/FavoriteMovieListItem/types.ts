import { IMovieData } from "@api/types";

export interface IFavoriteMovieListItem {
  deleteMovieById: (filmId: number) => void;
  handleWatchedMovie: (id: number) => void;
  movie: IMovieData;
}
