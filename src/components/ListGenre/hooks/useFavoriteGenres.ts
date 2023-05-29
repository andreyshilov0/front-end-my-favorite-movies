import { gql, useQuery } from "@apollo/client";
import { IFavoriteGenres } from "../types";

export const FAVORITE_GENRES = gql`
  query FavoriteGenres {
    favoriteGenres {
      id
    }
  }
`;

export const useFavoriteGenres = () => {
  const { loading, error, data } = useQuery<IFavoriteGenres>(FAVORITE_GENRES);

  const favoriteGenres = data

  return { loading, error, favoriteGenres };
};
