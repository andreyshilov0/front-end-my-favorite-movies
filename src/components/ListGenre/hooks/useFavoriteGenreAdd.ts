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
      onCompleted: () => {
        client.resetStore();
      },
      refetchQueries: [{ query: LIST_GENRES }, { query: FAVORITE_GENRES }],
      fetchPolicy: "network-only",
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
