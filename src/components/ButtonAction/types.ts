import { IMovieData } from "@api/types";

export interface IButtonAction {
  deleteMovieById: (filmId: number) => void;
  updateMovieWatchedById: (id: number) => void;
  movie: IMovieData;
}
