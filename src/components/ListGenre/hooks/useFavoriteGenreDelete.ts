import { gql, useMutation } from "@apollo/client";
import { IDataFavoriteGenresDelete } from "../types";
import { FAVORITE_GENRES } from "./useFavoriteGenres";
import { useApolloClient } from "@apollo/client";
import { LIST_GENRES } from "./useListGenres";

const FAVORITE_GENRE_DELETE = gql`
  mutation FavoriteGenreDelete($id: ID!) {
    favoriteGenreDelete(input: { id: $id }) {
      clientMutationId
    }
  }
`;

export const useFavoriteGenresDelete = () => {
  const client = useApolloClient();

  const [favoriteGenreDelete, { loading, error, data }] =
    useMutation<IDataFavoriteGenresDelete>(FAVORITE_GENRE_DELETE, {
      onCompleted: () => {
        client.resetStore();
      },
      refetchQueries: [{ query: LIST_GENRES }, { query: FAVORITE_GENRES }],

    });

  const deleteGenreById = (genreId: number) => {
    favoriteGenreDelete({
      variables: {
        id: genreId,
      },
    });
  };

  return { deleteGenreById, loading, error, data };
};
