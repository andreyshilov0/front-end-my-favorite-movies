import { gql, useMutation } from "@apollo/client";
import { IFavoriteMovieUpdateWatched } from "../types";
import { FAVORITE_MOVIES } from "@components/FavoriteMovie/hooks/useFavoriteMovies";

export const FAVORITE_MOVIE_UPDATE_WATCHED = gql`
mutation favoriteMovieUpdateWatched($id: ID!){
    favoriteMovieUpdateWatched(input: {
    id})
    }
`

export const useFavoriteMovieUpdateWatched = () => {
    const [favoriteMovieUpdateWatched, { loading, error }] = useMutation<IFavoriteMovieUpdateWatched>(FAVORITE_MOVIE_UPDATE_WATCHED, { refetchQueries: [{ query: FAVORITE_MOVIES }] })

    return [favoriteMovieUpdateWatched, { loading, error }]
}