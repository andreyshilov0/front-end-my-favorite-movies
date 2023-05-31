import { gql, useQuery } from "@apollo/client";
import { IFavoriteGenres } from "../types";
import { ICommonApiResponse } from "commonTypes";

export const FAVORITE_GENRES = gql`
  query FavoriteGenres {
    favoriteGenres {
      id
      name
    }
  }
`;

export const useFavoriteGenres = () => {
  const { loading, error, data } = useQuery<any>(FAVORITE_GENRES);

  const favoriteGenres = data?.favoriteGenres

  return { loading, error, favoriteGenres };
};
