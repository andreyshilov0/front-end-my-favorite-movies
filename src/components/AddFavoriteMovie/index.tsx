import { useState, useEffect } from "react";
import AddFavoriteMovieList from "@components/AddFavoriteMovieList";
import { getDataMovies } from "@api/tmbdAPI";
import { addMovieId } from "@components/helpers/isValidAddMoviesId";
import { DEFAULT_PAGE } from "@api/constants";
import AddFavoriteMovieModule from "@components/AddFavoriteMovieModule";
import { WrapperAddFavoriteMovie } from "./style";
import { IMovieDataReponse } from "@api/types";
import { IAddFavoriteMovie } from "./types";

const AddFavoriteMovie = ({
  currentDate,
  changeGenresId,
  range,
  blockView,
}: IAddFavoriteMovie) => {
  const [moviesId, setMoviesId] = useState<number[]>([]);
  const [moviesDate, setMoviesDate] = useState<
    Array<IMovieDataReponse> | undefined
  >([]);
  const [isSelectButtonMovieId, setIsSelectButtonMovieId] = useState<number[]>(
    []
  );

  const saveMovieId = (id: number) => {
    let newMovieId = [id, ...moviesId];
    let filterMovies = newMovieId.filter((movie) => movie != null);
    setMoviesId(filterMovies);
    addMovieId(filterMovies);
  };

  useEffect(() => {
    setIsSelectButtonMovieId(JSON.parse(localStorage["movieId"]));
  }, [moviesId]);

  useEffect(() => {
    getDataMovies(currentDate, DEFAULT_PAGE, changeGenresId, range).then(
      (res) => {
        setMoviesDate(res);
      }
    );
  }, [currentDate, range, changeGenresId]);

  return (
    <WrapperAddFavoriteMovie>
      {blockView ? (
        <AddFavoriteMovieModule
          moviesDate={moviesDate}
          saveMovieId={saveMovieId}
          isSelectButtonMovieId={isSelectButtonMovieId}
        />
      ) : (
        <AddFavoriteMovieList
          moviesDate={moviesDate}
          saveMovieId={saveMovieId}
          isSelectButtonMovieId={isSelectButtonMovieId}
        />
      )}
    </WrapperAddFavoriteMovie>
  );
};

export default AddFavoriteMovie;
