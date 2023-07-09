import { ApolloError } from "@apollo/client";
import { IQueryFavoriteMovies } from "@components/FavoriteMovie/types";

export interface IFavoriteMovieModule {
  userFavoriteMovies: Array<IMovieData>;
  deleteMovieById: (id: number) => void;
  updateMovieWatchedById: (id: number) => Promise<void> | void;
}

export interface IMovieData {
  id: number;
  description: string;
  imageUrl: string;
  year: number;
  title: string;
  watched: boolean;
}
