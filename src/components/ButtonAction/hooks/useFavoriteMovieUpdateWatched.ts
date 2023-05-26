import { gql, useMutation } from "@apollo/client";
import { ICommonApiResponse } from "@components/ListGenre/types";

export const FAVORITE_MOVIE_UPDATE_WATCHED = gql`
mutation FavoriteMovieUpdateWatched($id: ID!){
    favoriteMovieUpdateWatched(input: {
    id})
    }
`;

export const useFavoriteMovieUpdateWatched = () => {
    const [favoriteMovieUpdateWatched, { loading, error }] =
        useMutation<ICommonApiResponse>(FAVORITE_MOVIE_UPDATE_WATCHED);

    return [favoriteMovieUpdateWatched, { loading, error }];
};
