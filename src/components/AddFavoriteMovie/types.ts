import { ApolloError } from "@apollo/client";

export interface IAddFavoriteMovie {
  currentYear: number;
  currentGenreIds: number[];
  range: number;
  blockView: boolean;
}

export interface IFavoriteMovieAdd {
  loading: boolean
  error: ApolloError
  data: number
}

export interface IFavoriteMovieDelete {
  loading: boolean
  error: ApolloError
  data: number
}

export interface ITotalPages {
  loading: boolean
  error: ApolloError
  data: number
}
