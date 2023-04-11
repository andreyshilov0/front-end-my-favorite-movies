import { IMovieData } from "@api/types";

export interface IFavoriteMovieModule {
  moviesDate: Array<IMovieData>;
  deleteMovieById: (id: number) => void;
}
