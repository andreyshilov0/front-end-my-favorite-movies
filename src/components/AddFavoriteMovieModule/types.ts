import { Dispatch, SetStateAction } from "react";

export interface IAddFavoriteMoviesModule {
  moviesDate: Array<Object> | undefined;
  saveMovieId: (id: number) => void;
  isSelectButtonMovieId: number[];
  setNumberPage: Dispatch<SetStateAction<number>>;
  numberPage: number;
}
