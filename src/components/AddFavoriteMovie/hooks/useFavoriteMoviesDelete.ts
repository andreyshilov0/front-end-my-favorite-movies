import { gql, useMutation } from "@apollo/client";
import { ICommonApiResponse } from "@components/ListGenre/types";

export const FAVORITE_MOVIE_DELETE = gql`
mutation FavoriteMovieDelete($id: ID!) {
        favoriteMovieDelete(input: {
        id})}
`;

export const favoriteMovieDelete = () => {
    const [favoriteMovieDelete, { loading, error }] =
        useMutation<ICommonApiResponse>(FAVORITE_MOVIE_DELETE);

    return [favoriteMovieDelete, { loading, error }];
};
