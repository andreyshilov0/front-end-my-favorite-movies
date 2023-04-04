import React, { useState } from "react";
import { ModuleWrapper } from "./style";
import { IMovieData } from "@api/types";
import { getFavoriteMovies } from "@api/tmbdAPI";
import FavoriteMovieModuleItem from "@components/FavoriteMovieModuleItem";

const FavoriteMovieModule = () => {
  const [favoriteMovies, setFavoriteMovies] = useState<IMovieData[]>(
    getFavoriteMovies() as IMovieData[]
  );

  const handleWatchedMovie = (id: number) => {
    favoriteMovies[id].user_watched = !favoriteMovies[id].user_watched;

    setFavoriteMovies([...favoriteMovies]);
  };

  const deleteMovieById = (filmId: number) => {
    setFavoriteMovies(favoriteMovies.filter((film) => film.id !== filmId));
  };

  return (
    <ModuleWrapper>
      {favoriteMovies.map((movie) => (
        <FavoriteMovieModuleItem
          key={movie.id}
          handleWatchedMovie={handleWatchedMovie}
          deleteMovieById={deleteMovieById}
          movie={movie}
        />
      ))}
    </ModuleWrapper>
  );
};

export default FavoriteMovieModule;
