import { ICommonApiResponse } from "commonTypes";

export interface IListMovieByDiscover {
    sortBy: string;
    page: number;
    popularity: number;
    withGenres: number[] | undefined;
    year: number;
}


export interface ITotalPages {
    totalPages: number
}

export interface IDataMovieParameters extends ICommonApiResponse {
    listMovieByDiscover: Array<IListMovieByDiscover>;
    totalPages: Array<ITotalPages>;
}
