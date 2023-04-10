import { useState, useEffect } from "react";
import AddFavoriteMovieList from "@components/AddFavoriteMovieList";
import { getDataMovies } from "@api/tmbdAPI";
import { addMovieId } from "@components/helpers/isValidAddMoviesId";
import { DEFAULT_PAGE } from "@api/constants";
import AddFavoriteMovieModule from "@components/AddFavoriteMovieModule";
import { WrapperAddFavoriteMovie } from "./style";

const AddFavoriteMovie = ({
  currentDate,
  changeGenresId,
  range,
  blockView,
}: any) => {
  const [moviesId, setMoviesId] = useState<number[]>([]);
  const [moviesDate, setMoviesDate] = useState<any>([]);
  const [isSelectButtonMovieId, setIsSelectButtonMovieId] = useState(
    JSON.parse(localStorage["movieId"])
  );

  const saveMovieId = (id: number) => {
    let newMovieId = [id, ...moviesId];
    let filterMovies = newMovieId.filter((movie) => movie != null);
    setMoviesId(filterMovies);
    addMovieId(filterMovies);
  };

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
