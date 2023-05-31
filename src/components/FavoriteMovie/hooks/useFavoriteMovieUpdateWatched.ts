import { gql, useMutation } from "@apollo/client";
import { ICommonApiResponse } from "commonTypes";
import { FAVORITE_MOVIES } from "./useFavoriteMovies";

export const FAVORITE_MOVIE_UPDATE_WATCHED = gql`
mutation FavoriteMovieUpdateWatched($id: ID!) {
        favoriteMovieUpdateWatched(input: {
          id: $id
        }) {
          clientMutationId
        }}
`;

export const useFavoriteMovieUpdateWatched = () => {
  const [favoriteMovieUpdateWatched, { loading, error }] =
    useMutation<ICommonApiResponse>(FAVORITE_MOVIE_UPDATE_WATCHED, { refetchQueries: [FAVORITE_MOVIES] });

  const updateMovieWatchedById = (movieId: number) => {
    favoriteMovieUpdateWatched({
      variables: {
        id: movieId,
      },
    });
  };

  return [updateMovieWatchedById, { loading, error }];
};
