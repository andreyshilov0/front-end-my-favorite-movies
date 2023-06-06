import { ICommonApiResponse } from "commonTypes";

export interface IListMovieByDiscover {
    sortBy: string;
    page: number;
    withGenres: Array<number>;
    year: number;
    popularity: number;
}

export interface IUseMovieParameters {
    id: number;
    title: string;
    overview: string;
    posterPath: string;
    releaseDate: number;
    totalPages: number;
}

export interface IDataMovieParameters extends ICommonApiResponse {
    listMovieByDiscover: Array<IListMovieByDiscover>;
    totalPages: Array<IListMovieByDiscover>;
}
