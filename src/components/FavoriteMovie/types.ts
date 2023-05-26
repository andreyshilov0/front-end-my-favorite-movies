import { ICommonApiResponse } from "commonTypes";

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