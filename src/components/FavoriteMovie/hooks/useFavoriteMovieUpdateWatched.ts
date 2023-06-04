import { gql, useMutation } from "@apollo/client";
import { FAVORITE_MOVIES } from "./useFavoriteMovies";
import { IFavoriteMoviesUpdateWatched } from "../types";

export const FAVORITE_MOVIE_UPDATE_WATCHED = gql`
mutation FavoriteMovieUpdateWatched($id: ID!) {
        favoriteMovieUpdateWatched(input: {
          id: $id
        }) {
          clientMutationId
        }}
`;

export const useFavoriteMovieUpdateWatched = () => {
  const [favoriteMovieUpdateWatched, { loading, error, data }] =
    useMutation<IFavoriteMoviesUpdateWatched>(FAVORITE_MOVIE_UPDATE_WATCHED, { refetchQueries: [FAVORITE_MOVIES] });

  const updateMovieWatchedById = (id: number) => {
    favoriteMovieUpdateWatched({
      variables: {
        id: id,
      },
    });
  };

  return [updateMovieWatchedById, { loading, error, data }];
};
