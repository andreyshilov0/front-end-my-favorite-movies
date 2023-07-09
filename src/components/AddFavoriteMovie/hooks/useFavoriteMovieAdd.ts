import { gql, useMutation } from "@apollo/client";
import { FAVORITE_MOVIES } from "@components/FavoriteMovie/hooks/useFavoriteMovies";
import { IAddFavoriteMovieById } from "../types";

const FAVORITE_MOVIE_ADD = gql`
  mutation FavoriteMovieAdd($id: ID!) {
    favoriteMovieAdd(input: { id: $id }) {
      clientMutationId
    }
  }
`;

export const useFavoriteMovieAdd = () => {
  const [favoriteMovieAdd, { loading, error, data }] =
    useMutation<IAddFavoriteMovieById>(FAVORITE_MOVIE_ADD, {
      refetchQueries: [FAVORITE_MOVIES],
    });

  const addMovieById = (id: number) => {
    favoriteMovieAdd({
      variables: {
        id: id,
      },
    });
  };

  return { addMovieById, loading, error, data };
};
