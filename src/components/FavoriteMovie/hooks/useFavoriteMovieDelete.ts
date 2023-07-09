import { gql, useMutation } from "@apollo/client";
import { FAVORITE_MOVIES } from "./useFavoriteMovies";
import { IFavoriteMovieDelete } from "../types";

export const FAVORITE_MOVIE_DELETE = gql`
  mutation FavoriteMovieDelete($id: ID!) {
    favoriteMovieDelete(input: { id: $id }) {
      clientMutationId
    }
  }
`;

export const useFavoriteMovieDelete = () => {
  const [favoriteMovieDelete, { loading, error, data }] =
    useMutation<IFavoriteMovieDelete>(FAVORITE_MOVIE_DELETE, {
      refetchQueries: [FAVORITE_MOVIES],
    });

  const deleteMovieById = (id: number) => {
    favoriteMovieDelete({
      variables: {
        id,
      },
    });
  };

  return { deleteMovieById, loading, error, data };
};
