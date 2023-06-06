import { ICommonApiResponse } from "commonTypes";

export interface IAddFavoriteMovie {
  currentYear: number;
  currentGenreIds: number[];
  range: number;
  blockView: boolean;
}

export interface IAddFavoriteMovieById extends ICommonApiResponse {
  addMovieById: (id: number) => void
}