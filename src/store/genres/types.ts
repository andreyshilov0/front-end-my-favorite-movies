import { LoadingStatus } from "store/types";

export interface IGenreDataRequest {
  genres: IGenreData[];
}

export interface IGenreData {
  id: number;
  name: string;
}

export interface IGenreState {
  id: number;
  name: string;
  selectedGenres: [];
  status: LoadingStatus;
}
