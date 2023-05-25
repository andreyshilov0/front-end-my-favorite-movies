import { ApolloError } from "@apollo/client";

export interface IListMovieByDiscover {
    sortBy: string
    page: number
    withGenres: number
    year: number
    voteAverage: number
    popularity: number
}

export interface IUseListMovieByDiscover {
    loading: boolean
    error: ApolloError
    data: Array<IListMovieByDiscover>
}