import { gql, useMutation } from "@apollo/client";
import { IFavoriteGenreAdd } from "../types";
import { FAVORITE_GENRES } from "./useFavoriteGenres"


const FAVORITE_GENRE_ADD = gql`
mutation FavoriteGenreAdd($id: ID!) {
    favoriteGenreAdd(input: {
      id
})}
`

export const useFavoriteGenresAdd = () => {
  const [favoriteGenreAdd, { loading, error }] = useMutation<IFavoriteGenreAdd>(FAVORITE_GENRE_ADD, { refetchQueries: [{ query: FAVORITE_GENRES }] })

  return [favoriteGenreAdd, { loading, error }]
}