import { gql, useMutation } from "@apollo/client";
import { IDataFavoriteGenresDelete } from "../types";
import { FAVORITE_GENRES } from "./useFavoriteGenres";

const FAVORITE_GENRE_DELETE = gql`
  mutation FavoriteGenreDelete($id: ID!) {
    favoriteGenreDelete(input: { id: $id }) {
      clientMutationId
    }
  }
`;

export const useFavoriteGenresDelete = (
  setShouldRefetch: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const [favoriteGenreDelete, { loading, error, data }] =
    useMutation<IDataFavoriteGenresDelete>(FAVORITE_GENRE_DELETE, {
      onCompleted: () => {
        setShouldRefetch(true);
      },
      refetchQueries: [{ query: FAVORITE_GENRES }],
    });

  const deleteGenreById = (genreId: number) => {
    favoriteGenreDelete({
      variables: {
        id: genreId,
      },
    }).catch((error) => {
      console.error(error);
    });
  };

  return { deleteGenreById, loading, error, data };
};