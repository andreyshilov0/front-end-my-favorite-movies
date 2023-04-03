import { IMovieData } from "@api/types";

export interface IFavoriteMovieProps {
  deleteMovieById: (filmId: number) => void;
  handleWatchedMovie: (id: number) => void;
  movie: IMovieData;
}
