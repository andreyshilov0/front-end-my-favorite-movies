import { ApolloError } from "@apollo/client";
import { ICommonApiResponse } from "@components/ListGenre/types";

export interface IQueryFavoriteMovies {
    id: number
    title: string
    description: string
    imageUrl: string
    year: number
}

export interface IFavoriteMovies extends ICommonApiResponse {
    data: Array<IQueryFavoriteMovies>
}