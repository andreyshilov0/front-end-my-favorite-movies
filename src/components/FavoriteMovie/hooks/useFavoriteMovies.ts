import { gql, useQuery } from "@apollo/client";
import { IDataFavoriteMovies } from "../types";

export const FAVORITE_MOVIES = gql`
  query FavoriteMovies {
    favoriteMovies {
      id
      title
      description
      imageUrl
      year
      watched
    }
  }
`;

export const useFavoriteMovies = () => {
  const { loading, error, data } = useQuery<IDataFavoriteMovies | undefined>(FAVORITE_MOVIES);

  const userFavoriteMovies = data?.favoriteMovies

  return { loading, error, userFavoriteMovies };
};
