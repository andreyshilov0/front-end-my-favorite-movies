import { gql, useMutation } from "@apollo/client";
import { IFavoriteGenreDelete } from "../types";
import { FAVORITE_GENRES } from "./useFavoriteGenres";

const FAVORITE_GENRE_DELETE = gql`
mutation FavoriteGenreDelete($id: ID!) {
    favoriteGenreDelete(input: {
      id
})}
`

export const useFavoriteGenresDelete = () => {
  const [favoriteGenreDelete, { loading, error }] = useMutation<IFavoriteGenreDelete>(FAVORITE_GENRE_DELETE, { refetchQueries: [{ query: FAVORITE_GENRES }] })

  return [favoriteGenreDelete, { loading, error }]
}