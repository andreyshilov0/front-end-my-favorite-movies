import { IMovieData } from "@api/types";

export interface IButtonAction {
  deleteMovieById: (filmId: number) => void;
  handleWatchedMovie: (id: number) => void;
  movie: IMovieData;
}
