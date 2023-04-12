import { IMovieData } from "@api/types";
import { Dispatch, SetStateAction } from "react";

export interface IAddFavoriteMoviesList {
  moviesData?: Array<IMovieData>;
  saveMovieId: (id: number) => void;
  addSelectedMovieById: number[];
  blockView: boolean;
}
