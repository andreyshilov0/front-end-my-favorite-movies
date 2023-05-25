import { ApolloError } from "@apollo/client";

export interface IAddFavoriteMovie {
  currentYear: number;
  currentGenreIds: number[];
  range: number;
  blockView: boolean;
}

export interface IFavoriteMovieAction {
  loading: boolean
  error: ApolloError
}

export interface ITotalPages {
  loading: boolean
  error: ApolloError
  data: number
}
