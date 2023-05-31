import { ICommonApiResponse } from "commonTypes";

export interface IListMovieByDiscover {
    sortBy: string
    page: number
    withGenres: number
    year: number
    voteAverage: number
    popularity: number
    totalPages: number
}

export interface IUseListMovieByDiscover extends ICommonApiResponse {
    data: Array<IListMovieByDiscover>
}