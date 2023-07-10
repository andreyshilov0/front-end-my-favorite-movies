import { gql, useMutation } from "@apollo/client";
import { FAVORITE_GENRES } from "./useFavoriteGenres";
import { IDataFavoriteGenresAdd } from "../types";
import { useApolloClient } from "@apollo/client";
import { LIST_GENRES } from "./useListGenres";

const FAVORITE_GENRE_ADD = gql`
  mutation FavoriteGenreAdd($id: ID!) {
    favoriteGenreAdd(input: { id: $id }) {
      clientMutationId
    }
  }
`;

export const useFavoriteGenreAdd = () => {
  const client = useApolloClient();

  const [favoriteGenreAdd, { loading, error, data }] =
    useMutation<IDataFavoriteGenresAdd>(FAVORITE_GENRE_ADD, {
      refetchQueries: [FAVORITE_GENRES, LIST_GENRES],
      onCompleted: () => {
        client.resetStore();
      },
    });

  const addGenreById = (id: number) => {
    favoriteGenreAdd({
      variables: {
        id,
      },
    });
  };

  return { addGenreById, loading, error, data };
};
