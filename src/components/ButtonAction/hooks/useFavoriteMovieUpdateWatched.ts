import { gql, useMutation } from "@apollo/client";
import { ICommonApiResponse } from "commonTypes";

export const FAVORITE_MOVIE_UPDATE_WATCHED = gql`
mutation favoriteMovieUpdateWatched($id: ID!){
    favoriteMovieUpdateWatched(input: {
    id})
    }
`;

export const useFavoriteMovieUpdateWatched = () => {
    const [favoriteMovieUpdateWatched, { loading, error }] =
        useMutation<ICommonApiResponse>(FAVORITE_MOVIE_UPDATE_WATCHED);

    return [favoriteMovieUpdateWatched, { loading, error }];
};
