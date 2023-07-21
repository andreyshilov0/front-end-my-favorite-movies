import { ICommonApiResponse } from "commonTypes";

export interface IListMovieByDiscover {
    sortBy: string;
    page: number;
    voteAverage: number;
    withGenres: number[] | undefined;
    year: number;
    language: string | null
}


export interface ITotalPages {
    totalPages: number
}

export interface IDataMovieParameters extends ICommonApiResponse {
    listMovieByDiscover: Array<IListMovieByDiscover>;
    totalPages: Array<ITotalPages>;
}
