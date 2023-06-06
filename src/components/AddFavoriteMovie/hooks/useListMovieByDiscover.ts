import { gql, useQuery } from "@apollo/client";
import {
  IListMovieByDiscover,
  IDataMovieParameters,
} from "../../AddFavoriteMovieOption/types";

const LIST_MOVIE_BY_DISCOVER = gql`
  query ListMovieByDiscover(
    $sortBy: String
    $page: Int
    $popularity: Int
    $withGenres: ID
    $year: Int
  ) {
    listMovieByDiscover(
      sortBy: $sortBy
      page: $page
      popularity: $popularity
      withGenres: $withGenres
      year: $year
    ) {
      id
      title
      releaseDate
      overview
      posterPath
    }
    totalPages {
      totalPages
    }
  }
`;

const useListMovieByDiscover = ({
  sortBy,
  page,
  popularity,
  withGenres,
  year,
}: IListMovieByDiscover) => {
  const { loading, error, data } = useQuery<IDataMovieParameters>(
    LIST_MOVIE_BY_DISCOVER,
    {
      variables: {
        sortBy,
        page,
        popularity,
        withGenres,
        year,
      },
    }
  );

  return { loading, error, data };
};

export default useListMovieByDiscover;
