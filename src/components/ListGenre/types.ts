import { Dispatch, SetStateAction } from "react";
import { ICommonApiResponse } from "commonTypes";

export interface IGenresData {
  id: number;
  name: string;
  isSelected: boolean;
}

export interface IChangeGenres {
  setChangeGenresId: Dispatch<SetStateAction<number[]>>;
}

export interface IQueryListGenres {
  id: number;
  name?: string;
}

export interface IListGenres extends ICommonApiResponse {
  data: Array<IQueryListGenres>;
}

export interface IFavoriteGenres extends ICommonApiResponse {
  data: Array<IQueryListGenres>;
}
