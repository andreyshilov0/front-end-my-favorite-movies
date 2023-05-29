import { gql, useQuery } from "@apollo/client";
import { IUseListMovieByDiscover, IListMovieByDiscover } from "../types";

const LIST_MOVIE_BY_DISCOVER = gql`
query ListMovieByDiscover($sortBy: string, $page: number, $withGenres: Array<number>, $year: number, $voteAverage: number, $popularity: number, $totalPages: number) {
  listMovieByDiscover(sortBy, page, withGenres, year, voteAverage, popularity, totalPages) {
    sortBy
    page
    popularity
    voteAverage
    withGenres
    year
    totalPages
  }
}`;

export const useListMovieByDiscover = ({
  sortBy,
  page,
  popularity,
  voteAverage,
  withGenres,
  year,
  totalPages,
}: IListMovieByDiscover) => {
  const { loading, error, data } = useQuery<IUseListMovieByDiscover>(
    LIST_MOVIE_BY_DISCOVER
  );

  const movieOptions = data?.listMovieByDiscover;

  return { loading, error, movieOptions };
};
