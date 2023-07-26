import { Dispatch, SetStateAction } from "react";

export interface IAddFavoriteMoviesList {
  moviesData: Array<IMovieDataItems>;
  addSelectedToArrayMovieById: number[];
  blockView: boolean;
  currentPageNumber: number;
  setCurrentPageNumber: Dispatch<SetStateAction<number>>;
  totalPageCount: number | undefined;
}


export interface IMovieDataItems {
  id: number;
  overview: string;
  posterPath: string;
  releaseDate: string;
  title: string;
  watched: boolean;
}
