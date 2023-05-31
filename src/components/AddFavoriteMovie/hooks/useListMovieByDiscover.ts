import { gql, useQuery } from "@apollo/client";
import {
  IUseListMovieByDiscover,
  IListMovieByDiscover,
} from "../../AddFavoriteMovieOption/types";

const LIST_MOVIE_BY_DISCOVER = gql`
  query ListMovieByDiscover(
    $sortBy: String
    $page: Int
    $popularity: Int
    $voteAverage: Int
    $withGenres: ID
    $year: Int
    $totalPages: Int
  ) {
    listMovieByDiscover(
      sortBy: $sortBy
      page: $page
      popularity: $popularity
      voteAverage: $voteAverage
      withGenres: $withGenres
      year: $year
      totalPages: $totalPages
    ) {
      sortBy: sortBy
      page: page
      popularity: popularity
      voteAverage: voteAverage
      withGenres: withGenres
      year: year
      totalPages: totalPages
    }
  }
`;

const useListMovieByDiscover = ({
  sortBy,
  page,
  popularity,
  voteAverage,
  withGenres,
  year,
  totalPages,
}: IListMovieByDiscover) => {
  const { loading, error, data } = useQuery<IUseListMovieByDiscover>(
    LIST_MOVIE_BY_DISCOVER,
    {
      variables: {
        sortBy: sortBy,
        page: page,
        popularity: popularity,
        voteAverage: voteAverage,
        withGenres: withGenres,
        year: year,
        totalPages: totalPages,
      },
    }
  );

  const movieOptions = data;

  return { loading, error, movieOptions };
};

export default useListMovieByDiscover;
