import { IMovieData } from "@api/types";

export interface IFavoriteMovieProps {
  deleteMovieById: Function;
  handleWatchedMovie: Function;
  movie: IMovieData;
}
