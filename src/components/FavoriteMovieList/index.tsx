import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import FavoriteMovieListItem from "@components/FavoriteMovieListItem";
import { useTranslation } from "react-i18next";
import { ListWrapper, ListWrapperListHeader, ListWrapperBody } from "./style";
import { IMovieData } from "@api/types";
import { getFavoriteMovies } from "@api/tmbdAPI";
import { handleChangeMovieWatched } from "@components/helpers/handleWatched";

const FavoriteMovieList = ({ moviesDate, deleteMovieById }: any) => {
  const { t } = useTranslation("main-page");

  const handleWatchedMovie = (id: number) => {
    handleChangeMovieWatched(moviesDate, id);
  };

  return (
    <ListWrapper>
      <ListWrapperListHeader>
        <Typography>{t("favoriteFilms.nameFilms")}</Typography>
        <Typography>{t("favoriteFilms.overview")}</Typography>
      </ListWrapperListHeader>

      <ListWrapperBody>
        {moviesDate.map((movie: any) => (
          <FavoriteMovieListItem
            key={movie.id}
            handleWatchedMovie={handleWatchedMovie}
            deleteMovieById={deleteMovieById}
            movie={movie}
          />
        ))}
      </ListWrapperBody>
    </ListWrapper>
  );
};

export default FavoriteMovieList;
