import { gql, useMutation } from "@apollo/client";
import { ICommonApiResponse } from "commonTypes";
import { FAVORITE_GENRES } from "./useFavoriteGenres";

const FAVORITE_GENRE_DELETE = gql`
  mutation FavoriteGenreDelete($id: ID!) {
    favoriteGenreDelete(input: { id: $id }) {
      clientMutationId
    }
  }
`;

export const useFavoriteGenresDelete = () => {
  const [favoriteGenreDelete, { loading, error, data }] =
    useMutation<ICommonApiResponse>(FAVORITE_GENRE_DELETE, {
      refetchQueries: [FAVORITE_GENRES],
    });

  const deleteGenreById = (genreId: number) => {
    favoriteGenreDelete({
      variables: {
        id: genreId,
      },
    });
  };

  return [deleteGenreById, { loading, error, data }];
};
