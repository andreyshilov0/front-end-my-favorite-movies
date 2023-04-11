import { IMovieData } from "@api/types";
import { Dispatch, SetStateAction } from "react";

export interface IAddFavoriteMoviesModule {
  moviesDate: Array<IMovieData> | undefined;
  saveMovieId: (id: number) => void;
  isSelectButtonMovieId: number[];
  setNumberPage: Dispatch<SetStateAction<number>>;
  numberPage: number;
}
