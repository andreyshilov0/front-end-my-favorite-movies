import { IMovieData } from "@api/types";

export interface IAddFavoriteMoviesList {
  moviesData?: Array<IMovieData>;
  saveMovieId: (id: number) => void;
  addSelectedMovieById: number[];
  blockView: boolean;
}
