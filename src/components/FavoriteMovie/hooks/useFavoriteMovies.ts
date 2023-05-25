import { gql, useQuery } from "@apollo/client";
import { IFavoriteMovies } from "../types";

export const FAVORITE_MOVIES = gql`
    query FavoriteMovies {
        favoriteMovies {
      id
      title
      description
      imageUrl
      year
    }
  }`

export const useFavoriteMovie = () => {
  const { loading, error, data } = useQuery<IFavoriteMovies>(FAVORITE_MOVIES)

  const userFavoriteMovies = data?.favoriteMovies

  return { loading, error, userFavoriteMovies }
}