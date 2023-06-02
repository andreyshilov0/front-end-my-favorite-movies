import { gql, useQuery } from "@apollo/client";
import { IDataFavoriteGenres } from "../types";

export const FAVORITE_GENRES = gql`
  query FavoriteGenres {
    favoriteGenres {
      id
      name
    }
  }
`;

export const useFavoriteGenres = () => {
  const { loading, error, data } =
    useQuery<IDataFavoriteGenres>(FAVORITE_GENRES);

  const favoriteGenres = data?.favoriteGenres;

  return { loading, error, favoriteGenres };
};
