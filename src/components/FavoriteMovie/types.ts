import { ICommonApiResponse } from "commonTypes";
import { ApolloError } from "@apollo/client";

export interface IQueryFavoriteMovies {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    year: number;
    watched: boolean;
}

export interface IDataFavoriteMovies extends ICommonApiResponse {
    favoriteMovies: Array<IQueryFavoriteMovies>;
}

export interface IFavoriteMovies extends ICommonApiResponse {
    data: Array<IQueryFavoriteMovies>;
}

export interface IFavoriteMovieDelete extends ICommonApiResponse {
    deleteMovieById: (id: number) => void;
}

export interface IFavoriteMoviesUpdateWatched {
    loading: boolean;
    error: ApolloError | undefined;
    data: IFavoriteMoviesUpdateWatched | null | undefined;
}
