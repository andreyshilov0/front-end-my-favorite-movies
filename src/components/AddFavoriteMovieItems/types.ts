import { Dispatch, SetStateAction } from "react";
import { IMovieData } from "@api/types";

export interface IAddFavoriteMoviesList {
  moviesData?: Array<IMovieData>;
  saveMovieId: (id: number) => void;
  addSelectedToArrayMovieById: number[];
  blockView: boolean;
  numberPage: number;
  setNumberPage: Dispatch<SetStateAction<number>>;
}
