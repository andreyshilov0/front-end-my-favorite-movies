import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import FavoriteMovieListItem from "@components/FavoriteMovieListItem";
import { useTranslation } from "react-i18next";
import { ListWrapper, ListWrapperListHeader, ListWrapperBody } from "./style";
import { IMovieData } from "@api/types";
import { getFavoriteMovie } from "@api/tmbdAPI";

const FavoriteMovieList = () => {
  const { t } = useTranslation("main-page");
  const [favoriteMovie, setFavoriteMovie] = useState<IMovieData[]>(
    getFavoriteMovie()
  );

  const handleWatchedMovie = (id: number) => {
    favoriteMovie[id].user_watched = !favoriteMovie[id].user_watched;

    setFavoriteMovie([...favoriteMovie]);
  };

  const deleteMovieById = (filmId: number) => {
    setFavoriteMovie(favoriteMovie.filter((film) => film.id !== filmId));
  };

  return (
    <ListWrapper>
      <ListWrapperListHeader>
        <Typography>{t("favoriteFilms.nameFilms")}</Typography>
        <Typography>{t("favoriteFilms.overview")}</Typography>
      </ListWrapperListHeader>

      <ListWrapperBody>
        {favoriteMovie.map((movie, id) => (
          <FavoriteMovieListItem
            key={id}
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
