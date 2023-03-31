import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import FavoriteMovieListItem from "@components/FavoriteMovieListItem";
import { useTranslation } from "react-i18next";
import {
  ListWrapperHeader,
  ListWrapper,
  ListWrapperListHeader,
  ListWrapperBody,
} from "./style";

const FavoriteMovieList = () => {
  const { t } = useTranslation("main-page");
  const [favoriteMovie, setFavoriteMovie] = useState<any[]>(
    JSON.parse(localStorage["backend_data_favorite_movies"])
  );

  const handleWatchedMovie = (id: number) => {
    favoriteMovie[id].user_watched = !favoriteMovie[id].user_watched;

    setFavoriteMovie([...favoriteMovie]);
  };

  const deleteMovieById = (filmId: number) => {
    setFavoriteMovie(favoriteMovie.filter((film) => film.id !== filmId));
  };

  return (
    <>
      <ListWrapper>
        <ListWrapperHeader>
          <ListWrapperListHeader>
            <Typography>{t("favoriteFilms.nameFilms")}</Typography>
            <Typography>{t("favoriteFilms.overview")}</Typography>
          </ListWrapperListHeader>
        </ListWrapperHeader>
        <ListWrapperBody>
          {favoriteMovie.map((movie, id) => (
            <FavoriteMovieListItem
              key={id}
              watchedMovie={handleWatchedMovie}
              deleteMovieById={deleteMovieById}
              movie={movie}
            />
          ))}
        </ListWrapperBody>
      </ListWrapper>
    </>
  );
};

export default FavoriteMovieList;
