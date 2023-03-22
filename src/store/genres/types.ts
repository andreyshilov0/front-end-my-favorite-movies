import { loadingStatus } from "store/types";

export interface IGenreDataRequest {
  genres: IGenreData[];
}

export interface IGenreData {
  id: number;
  name: string;
}

export interface IGenreState {
  id: number[];
  entities?: [];
  selectedGenres: [];
  status: loadingStatus;
}
