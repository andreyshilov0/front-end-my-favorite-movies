import { Dispatch, SetStateAction } from "react";
import { IMovieData } from "@api/types";

export interface IAddFavoriteMoviesList {
  moviesData?: any
  addMovieById: any
  addSelectedToArrayMovieById: number[];
  blockView: boolean;
  currentPageNumber: number;
  setCurrentPageNumber: Dispatch<SetStateAction<number>>;
  totalPageCount: number;
}
