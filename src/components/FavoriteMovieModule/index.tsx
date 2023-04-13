import React, { useState } from "react";
import { ModuleWrapper } from "./style";
import FavoriteMovieModuleItem from "@components/FavoriteMovieModuleItem";
import { handleChangeMovieWatched } from "@components/helpers/handleWatched";
import { IFavoriteMovieModule } from "./types";

const FavoriteMovieModule = ({
  moviesData,
  deleteMovieById,
}: IFavoriteMovieModule) => {
  const handleWatchedMovie = (id: number) => {
    handleChangeMovieWatched(moviesData, id);
  };

  return (
    <ModuleWrapper>
      {moviesData.map((movie) => (
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
