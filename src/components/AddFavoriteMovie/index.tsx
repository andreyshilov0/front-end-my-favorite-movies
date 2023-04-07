import { useState, useEffect } from "react";
import AddFavoriteMovieList from "@components/AddFavoriteMovieList";
import { getDataMovies, getFavoriteMovieById } from "@api/tmbdAPI";
import { addMovieId } from "@components/helpers/isValidAddMoviesId";
import { DEFAULT_PAGE } from "@api/constants";
import AddFavoriteMovieModule from "@components/AddFavoriteMovieModule";
import { WrapperAddFavoriteMovie } from "./style";

const AddFavoriteMovie = ({ currentDate, changeGenresId, range }: any) => {
  const [moviesId, setMoviesId] = useState<number[]>([
    getFavoriteMovieById() as any,
  ]);
  const [moviesDate, setMoviesDate] = useState<any>([]);
  const [viewBlock, setViewBlock] = useState(false);

  const saveMovieId = (id: number) => {
    let newMovieId = [...moviesId, id];
    setMoviesId(newMovieId);
    addMovieId(newMovieId);
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
      {/* <AddFavoriteMovieList moviesDate={moviesDate} saveMovieId={saveMovieId} /> */}

      <AddFavoriteMovieModule
        moviesDate={moviesDate}
        saveMovieId={saveMovieId}
      />
    </WrapperAddFavoriteMovie>
  );
};

export default AddFavoriteMovie;
