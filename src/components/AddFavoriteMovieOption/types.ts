import { ICommonApiResponse } from "commonTypes";

export interface IListMovieByDiscover {
    sortBy: string;
    page: number;
    withGenres: Array<number>;
    year: number;
    popularity: number;
}

export interface ITotalPages {
    totalPages: number
}

export interface IDataMovieParameters extends ICommonApiResponse {
    listMovieByDiscover: Array<IListMovieByDiscover>;
    totalPages: Array<ITotalPages>;
}
