import { ApolloError } from "@apollo/client";
import { Dispatch, SetStateAction } from "react";

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

export interface ICommonApiResponse {
  loading: boolean;
  error: ApolloError;
}
