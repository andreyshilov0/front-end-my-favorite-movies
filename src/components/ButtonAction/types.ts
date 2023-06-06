import { IMovieData } from "@components/FavoriteMovieList/types";

export interface IButtonAction {
  deleteMovieById: (id: number) => void;
  updateMovieWatchedById: (id: number) => void;
  movie: IMovieData;
}
