import { IMovieData } from "@api/types";
import { ApolloError } from "@apollo/client";

export interface IButtonAction {
  deleteMovieById: (filmId: number) => void;
  handleWatchedMovie: (id: number) => void;
  movie: IMovieData;
}

export interface IFavoriteMovieUpdateWatched {
  loading: boolean
  error: ApolloError
  data: any
}