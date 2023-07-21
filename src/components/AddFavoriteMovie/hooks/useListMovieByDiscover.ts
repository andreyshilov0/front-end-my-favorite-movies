import { gql, useQuery } from "@apollo/client";
import {
  IListMovieByDiscover,
  IDataMovieParameters,
} from "../../AddFavoriteMovieOption/types";

const LIST_MOVIE_BY_DISCOVER = gql`
  query ListMovieByDiscover(
    $sortBy: String
    $page: Int
    $voteAverage: Int
    $withGenres: [ID!]
    $year: Int
    $language: String
  ) {
    listMovieByDiscover(
      sortBy: $sortBy
      page: $page
      voteAverage: $voteAverage
      withGenres: $withGenres
      year: $year
      language: $language
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
  voteAverage,
  withGenres,
  year,
  language
}: IListMovieByDiscover) => {
  const { loading, error, data } = useQuery<IDataMovieParameters>(
    LIST_MOVIE_BY_DISCOVER,
    {
      variables: {
        sortBy,
        page,
        voteAverage,
        withGenres,
        year,
        language
      },
    }
  );

  return { loading, error, data };
};

export default useListMovieByDiscover;
