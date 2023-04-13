import { IMovieData } from "@api/types";

export interface IFavoriteMovieModule {
  moviesData: Array<IMovieData>;
  deleteMovieById: (id: number) => void;
}
