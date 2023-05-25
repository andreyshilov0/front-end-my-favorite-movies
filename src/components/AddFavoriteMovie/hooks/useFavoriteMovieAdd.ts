import { gql, useMutation } from "@apollo/client";
import { IFavoriteMovieAdd } from "../types";
import { FAVORITE_MOVIES } from "@components/FavoriteMovie/hooks/useFavoriteMovies";

export const FAVORITE_MOVIE_ADD = gql`
mutation FavoriteMovieAdd($id: ID) = {
    favoriteMovieAdd(input: {
    id})}
`

export const useFavoriteMovieAdd = () => {
  const [favoriteMovieAdd, { loading, error }] = useMutation<IFavoriteMovieAdd>(FAVORITE_MOVIE_ADD, { refetchQueries: [{ query: FAVORITE_MOVIES }] })

  return [favoriteMovieAdd, { loading, error }]
}