import { ApolloError } from "@apollo/client";

export interface IQueryFavoriteMovies {
    id: number
    title: string
    description: string
    imageUrl: string
    year: number
}

export interface IFavoriteMovies {
    loading: boolean
    error: ApolloError
    data: Array<IQueryFavoriteMovies>
}