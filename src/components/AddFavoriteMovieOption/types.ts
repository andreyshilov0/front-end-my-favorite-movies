import { ApolloError } from "@apollo/client";
import { ICommonApiResponse } from "@components/ListGenre/types";

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