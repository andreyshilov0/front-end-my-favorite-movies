import { useState, useEffect } from "react";
import AddFavoriteMovieList from "@components/AddFavoriteMovieItems";
import { getDataMovies, getTotalPageCount } from "@api/tmbdAPI";
import {
  addMovieId,
  parseMovieId,
} from "@components/helpers/isValidAddMoviesId";
import { DEFAULT_PAGE } from "@api/constants";
import { WrapperAddFavoriteMovie } from "./style";
import { IMovieDataReponse } from "@api/types";
import { IAddFavoriteMovie } from "./types";
import { useQuery } from "@apollo/client";
import useListMovieByDiscover from "./hooks/useListMovieByDiscover";

const AddFavoriteMovie = ({
  currentYear,
  currentGenreIds,
  range,
  blockView,
}: IAddFavoriteMovie) => {
  const [movieIds, setMovieIds] = useState<number[]>([]);
  const [moviesData, setMoviesData] = useState<Array<IMovieDataReponse>>([]);
  const [addSelectedToArrayMovieById, setAddSelectedToArrayMovieById] =
    useState<number[]>([]);
  const [currentPageNumber, setCurrentPageNumber] = useState(DEFAULT_PAGE);
  const [totalPageCount, setTotalPageCount] = useState(DEFAULT_PAGE);
  // const { loading, error, movieOptions } = useListMovieByDiscover({
  //   sortBy: "popularity.desc",
  //   page: DEFAULT_PAGE,
  //   popularity: 100,
  //   voteAverage: 100,
  //   withGenres: 80,
  //   year: currentYear,
  //   totalPages: 300,
  // });
  // console.log(movieOptions)

  const saveMovieId = (id: number) => {
    const arrayMovieIds = [id, ...movieIds];
    setMovieIds(arrayMovieIds);
    addMovieId(arrayMovieIds);
  };

  return (
    <WrapperAddFavoriteMovie>
      <AddFavoriteMovieList
        blockView={blockView}
        moviesData={moviesData}
        saveMovieId={saveMovieId}
        addSelectedToArrayMovieById={addSelectedToArrayMovieById}
        currentPageNumber={currentPageNumber}
        setCurrentPageNumber={setCurrentPageNumber}
        totalPageCount={totalPageCount}
      />
    </WrapperAddFavoriteMovie>
  );
};

export default AddFavoriteMovie;

// useEffect(() => {
//   setAddSelectedToArrayMovieById(parseMovieId);
// }, [movieIds]);

// useEffect(() => {
//   getDataMovies(currentYear, currentPageNumber, currentGenreIds, range).then(
//     (res) => {
//       setMoviesData(res ? res : []);
//     }
//   );
// }, [currentYear, range, currentGenreIds, currentPageNumber]);

// useEffect(() => {
//   getTotalPageCount().then((res) => {
//     setTotalPageCount(res);
//   });
// }, []);
