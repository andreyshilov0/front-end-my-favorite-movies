import { gql, useMutation } from "@apollo/client";
import { IFavoriteMovieDelete } from "../types";
import { FAVORITE_MOVIES } from "@components/FavoriteMovie/hooks/useFavoriteMovies";

export const FAVORITE_MOVIE_DELETE = gql`
mutation favoriteMovieDelete($id: ID!) {
        favoriteMovieDelete(input: {
        id})}
`

export const favoriteMovieDelete = () => {
    const [favoriteMovieDelete, { loading, error }] = useMutation<IFavoriteMovieDelete>(FAVORITE_MOVIE_DELETE, { refetchQueries: [{ query: FAVORITE_MOVIES }] })

    return [favoriteMovieDelete, { loading, error }]
}