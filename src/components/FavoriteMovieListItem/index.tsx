import React from "react";
import { IObjectMovieDataItem } from "./types";
import {
  ImageWrapper,
  WrapperListItem,
  WrapperOverview,
  WrapperTitle,
} from "./style";
import ButtonsAction from "@components/ButtonAction";
import { BASE_IMAGE_PATH } from "@api/constants";
import { useTranslation } from "react-i18next";

const FavoriteMovieListItem = ({ movie }: IObjectMovieDataItem) => {
  const { t } = useTranslation("main-page");
  return (
    <WrapperListItem>
      <WrapperTitle>{movie?.title}</WrapperTitle>
      <ImageWrapper
        src={`${BASE_IMAGE_PATH}/${movie.poster_path}`}
        alt={t("favoriteMovies.altImage") as string}
      />
      <WrapperOverview>{movie?.overview}</WrapperOverview>

      <ButtonsAction />
    </WrapperListItem>
  );
};

export default FavoriteMovieListItem;
