import { gql, useMutation } from "@apollo/client";
import { IFavoriteMovieAction } from "../types";
import { FAVORITE_MOVIES } from "@components/FavoriteMovie/hooks/useFavoriteMovies";

export const FAVORITE_MOVIE_ADD = gql`
mutation FavoriteMovieAdd($id: ID) = {
    favoriteMovieAdd(input: {
    id})}
`

export const useFavoriteMovieAdd = () => {
  const [favoriteMovieAdd, { loading, error }] = useMutation<IFavoriteMovieAction>(FAVORITE_MOVIE_ADD, { refetchQueries: [{ query: FAVORITE_MOVIES }] })

  return [favoriteMovieAdd, { loading, error }]
}