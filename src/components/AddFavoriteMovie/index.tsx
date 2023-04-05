import { useState, useEffect } from "react";
import AddFavoriteMovieList from "@components/AddFavoriteMovieList";
import { AddContainerMovie, AddFavoriteMoviePaper } from "./style";
import { getDataMovies } from "@api/tmbdAPI";

const AddFavoriteMovie = () => {
  const [moviesId, setMoviesId] = useState<number[]>([]);
  const [moviesDate, setMoviesDate] = useState([]);

  useEffect(() => {});
  return (
    <AddFavoriteMoviePaper>
      <AddFavoriteMovieList />
    </AddFavoriteMoviePaper>
  );
};

export default AddFavoriteMovie;
