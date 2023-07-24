import { ICommonApiResponse } from "commonTypes";

export interface IListMovieByDiscover {
    sortBy: string;
    page: number;
    voteAverage: number;
    withGenres: number[] | undefined;
    year: number;
    language: string | null;
}

export interface ITotalPages {
    totalPages: number;
}
export interface IListMovieByDiscoverResponse {
    movies: Array<IListMovieByDiscover>;
    totalPages: Array<ITotalPages>;
}

export interface IDataMovieParameters extends ICommonApiResponse {
    listMovieByDiscover: IListMovieByDiscoverResponse;
    totalPages: Array<ITotalPages>;
}
