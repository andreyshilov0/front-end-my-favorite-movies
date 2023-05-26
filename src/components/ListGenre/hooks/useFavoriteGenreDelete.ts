import { gql, useMutation } from "@apollo/client";
import { ICommonApiResponse } from "../types";

const FAVORITE_GENRE_DELETE = gql`
mutation FavoriteGenreDelete($id: ID!) {
    favoriteGenreDelete(input: {
      id
})}
`;

export const useFavoriteGenresDelete = () => {
  const [favoriteGenreDelete, { loading, error }] =
    useMutation<ICommonApiResponse>(FAVORITE_GENRE_DELETE);

  return [favoriteGenreDelete, { loading, error }];
};
