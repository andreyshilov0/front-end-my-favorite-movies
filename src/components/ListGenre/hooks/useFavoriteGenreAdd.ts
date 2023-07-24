import { gql, useMutation } from "@apollo/client";
import { FAVORITE_GENRES } from "./useFavoriteGenres";
import { IDataFavoriteGenresAdd } from "../types";
import { useApolloClient } from "@apollo/client";

const FAVORITE_GENRE_ADD = gql`
  mutation FavoriteGenreAdd($id: ID!) {
    favoriteGenreAdd(input: { id: $id }) {
      clientMutationId
    }
  }
`;

export const useFavoriteGenreAdd = (setShouldRefetch: React.Dispatch<React.SetStateAction<boolean>>) => {
  const client = useApolloClient();

  const [favoriteGenreAdd, { loading, error, data }] =
    useMutation<IDataFavoriteGenresAdd>(FAVORITE_GENRE_ADD, {
      onCompleted: () => {
        client.resetStore();
        setShouldRefetch(true);
      },
      refetchQueries: [{ query: FAVORITE_GENRES }],
    });

  const addGenreById = (id: number) => {
    favoriteGenreAdd({
      variables: {
        id,
      },
    }).catch((error) => {
      console.error(error)
    });
  };

  return { addGenreById, loading, error, data };
};
