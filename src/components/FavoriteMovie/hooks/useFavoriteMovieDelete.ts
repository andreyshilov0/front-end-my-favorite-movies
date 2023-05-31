import { gql, useMutation } from "@apollo/client";
import { ICommonApiResponse } from "commonTypes";
import { FAVORITE_MOVIES } from "./useFavoriteMovies";

export const FAVORITE_MOVIE_DELETE = gql`
  mutation FavoriteMovieDelete($id: ID!) {
    favoriteMovieDelete(input: { id: $id }) {
      clientMutationId
    }
  }
`;

export const useFavoriteMovieDelete = () => {
  const [favoriteMovieDelete, { loading, error }] = useMutation(
    FAVORITE_MOVIE_DELETE,
    { refetchQueries: [FAVORITE_MOVIES] }
  );

  const deleteMovieById = (movieId: number) => {
    favoriteMovieDelete({
      variables: {
        id: movieId,
      },
    });
  };

  return [deleteMovieById, { loading, error }];
};
