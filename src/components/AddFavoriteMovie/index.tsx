import { useState, useEffect } from "react";
import AddFavoriteMovieList from "@components/AddFavoriteMovieItems";
import { getDataMovies } from "@api/tmbdAPI";
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
  const [addSelectedMovieById, setAddSelectedMovie] = useState<number[]>([]);

  const saveMovieId = (id: number) => {
    const arrayMovieIds = [id, ...movieIds];
    setMovieIds(arrayMovieIds);
    addMovieId(arrayMovieIds);
  };

  useEffect(() => {
    setAddSelectedMovie(parseMovieId);
  }, [movieIds]);

  useEffect(() => {
    getDataMovies(currentYear, DEFAULT_PAGE, currentGenreIds, range).then(
      (res) => {
        setMoviesData(res ? res : []);
      }
    );
  }, [currentYear, range, currentGenreIds]);

  return (
    <WrapperAddFavoriteMovie>
      <AddFavoriteMovieList
        blockView={blockView}
        moviesData={moviesData}
        saveMovieId={saveMovieId}
        addSelectedMovieById={addSelectedMovieById}
      />
    </WrapperAddFavoriteMovie>
  );
};

export default AddFavoriteMovie;
