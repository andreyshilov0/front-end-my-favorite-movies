import { gql, useMutation } from "@apollo/client";
import { ICommonApiResponse } from "commonTypes";

const FAVORITE_GENRE_DELETE = gql`
mutation FavoriteGenreDelete($id: number!) {
    favoriteGenreDelete(input: {
      id
})}
`;

export const useFavoriteGenresDelete = () => {
  const [favoriteGenreDelete, { loading, error }] =
    useMutation<ICommonApiResponse>(FAVORITE_GENRE_DELETE);

  return [favoriteGenreDelete, { loading, error }];
};
