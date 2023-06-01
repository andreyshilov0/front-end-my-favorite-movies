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
  const { loading, error, data } = useQuery<IUseListMovieByDiscover>(
    LIST_MOVIE_BY_DISCOVER,
    {
      variables: {
        sortBy: sortBy,
        page: page,
        popularity: popularity,
        withGenres: withGenres,
        year: year,
      },
    }
  );

  const listMoviesToDiscover = data && data.listMovieByDiscover

  return { loading, error, listMoviesToDiscover };
};

export default useListMovieByDiscover;
