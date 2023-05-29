import { gql, useMutation } from "@apollo/client";
import { ICommonApiResponse } from "commonTypes";

export const FAVORITE_MOVIE_DELETE = gql`
mutation FavoriteMovieDelete($id: ID!) {
        favoriteMovieDelete(input: {
          id: $id
        }) {
          clientMutationId
        }}
`;

export const useFavoriteMovieDelete = (movieId: number) => {
    const [favoriteMovieDelete, { loading, error }] =
        useMutation(FAVORITE_MOVIE_DELETE);

    return [favoriteMovieDelete, { loading, error }];
};
