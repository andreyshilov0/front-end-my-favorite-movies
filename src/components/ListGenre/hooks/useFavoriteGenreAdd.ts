import { gql, useMutation } from "@apollo/client";
import { ICommonApiResponse } from "commonTypes";

const FAVORITE_GENRE_ADD = gql`
mutation FavoriteGenreAdd($id: number!) {
    favoriteGenreAdd(input: {
      id
})}
`;

export const useFavoriteGenresAdd = () => {
  const [favoriteGenreAdd, { loading, error }] =
    useMutation<ICommonApiResponse>(FAVORITE_GENRE_ADD);

  return [favoriteGenreAdd, { loading, error }];
};
