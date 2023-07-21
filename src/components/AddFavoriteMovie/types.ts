import { ICommonApiResponse } from "commonTypes";

export interface IAddFavoriteMovie {
  currentYear: number;
  currentGenreIds: number[];
  rangeSelector: number;
  blockView: boolean;
}

export interface IAddFavoriteMovieById extends ICommonApiResponse {
  addMovieById: (id: number) => void;
}

export interface ITotalPages {
  totalPages: number;
}

