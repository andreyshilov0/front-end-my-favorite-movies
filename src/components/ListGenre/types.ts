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
  id: number
  name?: string
}

export interface IListGenres {
  loading: boolean
  error: ApolloError
  data: Array<IQueryListGenres>
}

export interface IFavoriteGenres {
  loading: boolean
  error: ApolloError
  data: Array<IQueryListGenres>
}

export interface IFavoriteGenreAction {
  loading: boolean
  error: ApolloError
}