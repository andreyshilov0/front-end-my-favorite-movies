import { gql, useQuery } from "@apollo/client";
import { IUseListMovieByDiscover } from "../types";

export const LIST_MOVIE_BY_DISCOVER = gql`
query ListMovieByDiscover($sortBy: string, $page: number, $withGenres: number, $year: number, $voteAverage: number, $popularity: number) {
  listMovieByDiscover(sortBy, page, withGenres, year, voteAverage, popularity) {
    sortBy
    page
    popularity
    sortBy
    voteAverage
    withGenres
    year
  }
}`

export const useListMovieByDiscover = () => {
  const { loading, error, data } = useQuery<IUseListMovieByDiscover>(LIST_MOVIE_BY_DISCOVER)

  const movieOptions = data?.listMovieByDiscover

  return { loading, error, movieOptions }
}