import { gql, useMutation } from "@apollo/client";
import { ICommonApiResponse } from "commonTypes";

export const FAVORITE_GENRE_DELETE = gql`
  mutation FavoriteGenreDelete($id: ID!) {
    favoriteGenreDelete(input: { id: $id }) {
      clientMutationId
    }
  }
`;

export const useFavoriteGenresDelete = () => {
  const [favoriteGenreDelete, { loading, error }] =
    useMutation<ICommonApiResponse>(FAVORITE_GENRE_DELETE);

  return [favoriteGenreDelete, { loading, error }];
};
