import { gql, useMutation } from "@apollo/client";
import { IFavoriteGenreAction } from "../types";
import { FAVORITE_GENRES } from "./useFavoriteGenres"


const FAVORITE_GENRE_ADD = gql`
mutation FavoriteGenreAdd($id: ID!) {
    favoriteGenreAdd(input: {
      id
})}
`

export const useFavoriteGenresAdd = () => {
  const [favoriteGenreAdd, { loading, error }] = useMutation<IFavoriteGenreAction>(FAVORITE_GENRE_ADD, { refetchQueries: [{ query: FAVORITE_GENRES }] })

  return [favoriteGenreAdd, { loading, error }]
}