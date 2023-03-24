import { loadingStatus } from "store/types";

export interface IGenreDataRequest {
  genres: IGenreData[];
}

export interface IGenreData {
  id: number;
  name: string;
}

export interface IGenreState {
  selectedGenres: number[];
  status: loadingStatus;
}

export interface IGenreEntityAdapter {
  selectedGenres: number[];
  status: loadingStatus;
}
