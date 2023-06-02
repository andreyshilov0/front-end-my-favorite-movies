import { IQueryFavoriteMovies } from "@components/FavoriteMovie/types";

export interface IFavoriteMovieList {
  deleteMovieById: (id: number) => void;
  userFavoriteMovies: Array<IMovieData>;
  updateMovieWatchedById: (id: number) => void;
}

export interface IMovieData {
  id: number;
  description: string;
  imageUrl: string;
  year: string;
  title: string;
  watched: boolean;
}

