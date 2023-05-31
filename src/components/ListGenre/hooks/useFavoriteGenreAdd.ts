import { gql, useMutation } from "@apollo/client";
import { ICommonApiResponse } from "commonTypes";
import { FAVORITE_GENRES } from "./useFavoriteGenres";

const FAVORITE_GENRE_ADD = gql`
  mutation FavoriteGenreAdd($id: ID!) {
    favoriteGenreAdd(input: { id: $id }) {
      clientMutationId
    }
  }
`;

export const useFavoriteGenreAdd = () => {
  const [favoriteGenreAdd, { loading, error, data }] =
    useMutation<ICommonApiResponse>(FAVORITE_GENRE_ADD, {
      refetchQueries: [FAVORITE_GENRES],
    });

  const addGenreById = (genreId: number) => {
    favoriteGenreAdd({
      variables: {
        id: genreId,
      },
    });
  };

  return [addGenreById, { loading, error, data }];
};
