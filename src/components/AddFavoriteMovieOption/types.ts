import { ICommonApiResponse } from "commonTypes";
import { ITotalPages } from "@components/AddFavoriteMovie/types";

export interface IListMovieByDiscover {
    sortBy: string;
    page: number;
    voteAverage: number;
    withGenres: number[] | undefined;
    year: number;
    language: string | null;
}


export interface IListMovieByDiscoverResponse {
    movies: Array<IListMovieByDiscover>;
    totalPages: Array<ITotalPages>;
}

export interface IDataMovieParameters extends ICommonApiResponse {
    listMovieByDiscover: IListMovieByDiscoverResponse;
    totalPages: Array<ITotalPages>;
}
