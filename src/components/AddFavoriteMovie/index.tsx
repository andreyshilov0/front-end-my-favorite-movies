import { useState } from "react";
import AddFavoriteMovieList from "@components/AddFavoriteMovieItems";
import { DEFAULT_PAGE, DEFAULT_SORT_BY } from "constants/constants";
import { WrapperAddFavoriteMovie } from "./style";
import { IAddFavoriteMovie } from "./types";
import useListMovieByDiscover from "./hooks/useListMovieByDiscover";
import { useFavoriteGenres } from "@components/ListGenre/hooks/useFavoriteGenres";
import { useFavoriteMovies } from "@components/FavoriteMovie/hooks/useFavoriteMovies";
import { IQueryFavoriteMovies } from "@components/FavoriteMovie/types";

const AddFavoriteMovie = ({
  currentYear,
  range,
  blockView,
}: IAddFavoriteMovie) => {
  const [currentPageNumber, setCurrentPageNumber] = useState(DEFAULT_PAGE);
  const { favoriteGenres } = useFavoriteGenres();
  const { userFavoriteMovies } = useFavoriteMovies();

  const genresIds = favoriteGenres?.map((genres) => {
    return genres.id;
  });
  const addSelectedToArrayMovieById =
    userFavoriteMovies?.map((movie: IQueryFavoriteMovies) => {
      return Number(movie.id);
    });

  const { data } = useListMovieByDiscover({
    sortBy: DEFAULT_SORT_BY,
    page: currentPageNumber,
    popularity: range,
    withGenres: genresIds,
    year: currentYear,
  });

  const totalPageCount = data?.totalPages[0]?.totalPages || 0;
  const listMovieByDiscover: any = data?.listMovieByDiscover;

  return (
    <WrapperAddFavoriteMovie>
      <AddFavoriteMovieList
        blockView={blockView}
        moviesData={listMovieByDiscover}
        addSelectedToArrayMovieById={addSelectedToArrayMovieById}
        currentPageNumber={currentPageNumber}
        setCurrentPageNumber={setCurrentPageNumber}
        totalPageCount={totalPageCount}
      />
    </WrapperAddFavoriteMovie>
  );
};

export default AddFavoriteMovie;
