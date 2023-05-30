import { gql, useMutation } from "@apollo/client";
import { ICommonApiResponse } from "commonTypes";

export const FAVORITE_GENRE_ADD = gql`
  mutation FavoriteGenreAdd($id: ID!) {
    favoriteGenreAdd(input: { id: $id }) {
      clientMutationId
    }
  }
`;

export const useFavoriteGenresAdd = () => {
  const [favoriteGenreAdd, { loading, error }] =
    useMutation<ICommonApiResponse>(FAVORITE_GENRE_ADD);

  return [favoriteGenreAdd, { loading, error }];
};
