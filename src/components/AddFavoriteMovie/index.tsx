import { useState, useEffect } from "react";
import AddFavoriteMovieList from "@components/AddFavoriteMovieItems";
import { DEFAULT_PAGE, DEFAULT_SORT_BY } from "constants/constants";
import { WrapperAddFavoriteMovie } from "./style";
import { IAddFavoriteMovie } from "./types";
import useListMovieByDiscover from "./hooks/useListMovieByDiscover";
import { useFavoriteGenres } from "@components/ListGenre/hooks/useFavoriteGenres";
import { useFavoriteMovieAdd } from "./hooks/useFavoriteMovieAdd";
import { useFavoriteMovies } from "@components/FavoriteMovie/hooks/useFavoriteMovies";
import { IQueryListGenres } from "@components/ListGenre/types";
import { IQueryFavoriteMovies } from "@components/FavoriteMovie/types";

const AddFavoriteMovie = ({
  currentYear,
  range,
  blockView,
}: IAddFavoriteMovie) => {
  const [genresId, setGenresId] = useState<number[]>([]);
  const [addSelectedToArrayMovieById, setAddSelectedToArrayMovieById] =
    useState<number[]>([]);
  const [currentPageNumber, setCurrentPageNumber] = useState(DEFAULT_PAGE);
  const [totalPageCount, setTotalPageCount] = useState(DEFAULT_PAGE);
  const { favoriteGenres } = useFavoriteGenres();
  const [addMovieById, { }] = useFavoriteMovieAdd();
  const { userFavoriteMovies } = useFavoriteMovies();
  const { listMoviesToDiscover } = useListMovieByDiscover({
    sortBy: DEFAULT_SORT_BY,
    page: currentPageNumber,
    popularity: range,
    withGenres: genresId,
    year: currentYear,
  });

  useEffect(() => {
    favoriteGenres &&
      favoriteGenres.map((genres: IQueryListGenres) => {
        setGenresId(genres.id);
      });
    userFavoriteMovies &&
      userFavoriteMovies.map((movie: IQueryFavoriteMovies) => {
        setAddSelectedToArrayMovieById(movie.id);
      });
    listMoviesToDiscover &&
      listMoviesToDiscover.map((movie) => {
        setTotalPageCount(movie.totalPages);
      });
  }, [favoriteGenres, userFavoriteMovies, listMoviesToDiscover]);

  return (
    <WrapperAddFavoriteMovie>
      <AddFavoriteMovieList
        blockView={blockView}
        moviesData={listMoviesToDiscover}
        addMovieById={addMovieById}
        addSelectedToArrayMovieById={addSelectedToArrayMovieById}
        currentPageNumber={currentPageNumber}
        setCurrentPageNumber={setCurrentPageNumber}
        totalPageCount={totalPageCount}
      />
    </WrapperAddFavoriteMovie>
  );
};

export default AddFavoriteMovie;
