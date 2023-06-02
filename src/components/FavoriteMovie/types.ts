import { ICommonApiResponse } from "commonTypes";

export interface IQueryFavoriteMovies {
    id: number
    title: string
    description: string
    imageUrl: string
    year: number
    watched: boolean

}

export interface IDataFavoriteMovies extends ICommonApiResponse {
    favoriteMovies: Array<IQueryFavoriteMovies>
}

export interface IFavoriteMovies extends ICommonApiResponse {
    data: Array<IQueryFavoriteMovies>
}