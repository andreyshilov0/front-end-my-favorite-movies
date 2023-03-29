import React from "react";
import { Typography } from "@mui/material";
import { IObjectMovieData } from "@components/FavoriteMovie/types";
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
  return (
    <>
      <ListWrapper>
        <ListWrapperHeader>
          <ListWrapperListHeader>
            <Typography>{t("favoriteFilms.nameFilms")}</Typography>
            <Typography>{t("favoriteFilms.overview")}</Typography>
          </ListWrapperListHeader>
        </ListWrapperHeader>
        <ListWrapperBody>{"Фильмы"}</ListWrapperBody>
      </ListWrapper>
    </>
  );
};

export default FavoriteMovieList;
