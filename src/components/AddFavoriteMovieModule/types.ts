import { IMovieData } from "@api/types";
import { Dispatch, SetStateAction } from "react";

export interface IAddFavoriteMoviesModule {
  moviesData?: Array<IMovieData>;
  saveMovieId: (id: number) => void;
  addSelectedMovieById: number[];
}
