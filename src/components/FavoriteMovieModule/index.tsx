import React, { useState } from "react";
import { ModuleWrapper } from "./style";
import FavoriteMovieModuleItem from "@components/FavoriteMovieModuleItem";
import { handleChangeMovieWatched } from "@components/helpers/handleWatched";

const FavoriteMovieModule = ({ moviesDate, deleteMovieById }: any) => {
  const handleWatchedMovie = (id: number) => {
    handleChangeMovieWatched(moviesDate, id);
  };

  return (
    <ModuleWrapper>
      {moviesDate.map((movie: any) => (
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
