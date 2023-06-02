import { Dispatch, SetStateAction } from "react";
import { ICommonApiResponse } from "commonTypes";

export interface IChangeGenres {
  setChangeGenresId: Dispatch<SetStateAction<number[]>>;
}

export interface IQueryListGenres {
  id: number;
  name: string;
}

export interface IDataListGenres extends ICommonApiResponse {
  listGenres: Array<IQueryListGenres>;
}

export interface IDataFavoriteGenres extends ICommonApiResponse {
  favoriteGenres: Array<IQueryListGenres>;
}

export interface IDataFavoriteGenresAdd extends ICommonApiResponse {
  addGenreById: (id: number) => void;
}

export interface IDataFavoriteGenresDelete extends ICommonApiResponse {
  deleteGenreById: (id: number) => void;
}
