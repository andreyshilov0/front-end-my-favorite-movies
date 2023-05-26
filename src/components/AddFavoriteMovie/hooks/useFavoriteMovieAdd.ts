import { gql, useMutation } from "@apollo/client";
import { ICommonApiResponse } from "@components/ListGenre/types";

export const FAVORITE_MOVIE_ADD = gql`
mutation FavoriteMovieAdd($id: ID) = {
    favoriteMovieAdd(input: {
    id})}
`;

export const useFavoriteMovieAdd = () => {
  const [favoriteMovieAdd, { loading, error }] =
    useMutation<ICommonApiResponse>(FAVORITE_MOVIE_ADD);

  return [favoriteMovieAdd, { loading, error }];
};
