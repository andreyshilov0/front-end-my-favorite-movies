import { Dispatch, SetStateAction } from "react";

export interface IAddFavoriteMoviesList {
  moviesData: Array<IMovieDataItems> | any;
  addSelectedToArrayMovieById: number[];
  blockView: boolean;
  currentPageNumber: number;
  setCurrentPageNumber: Dispatch<SetStateAction<number>>;
  totalPageCount: number | any;
}

export interface IMovieDataItems {
  id: number;
  overview: string;
  posterPath: string;
  releaseDate: string;
  title: string;
  watched: boolean;
}
