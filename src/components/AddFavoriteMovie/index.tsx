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

  const saveMovieId = (id: number) => {
    const arrayMovieIds = [id, ...movieIds];
    setMovieIds(arrayMovieIds);
    addMovieId(arrayMovieIds);
  };

  useEffect(() => {
    setAddSelectedToArrayMovieById(parseMovieId);
  }, [movieIds]);

  useEffect(() => {
    getDataMovies(currentYear, currentPageNumber, currentGenreIds, range).then(
      (res) => {
        setMoviesData(res ? res : []);
      }
    );
  }, [currentYear, range, currentGenreIds, currentPageNumber]);

  useEffect(() => {
    getTotalPageCount().then((res) => {
      setTotalPageCount(res);
    });
  }, []);

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
