import React from "react";
import { DEFAULT_IMAGE_URL } from "@api/constants";
import { ImageModuleWrapper, ModuleOverview } from "./style";
import ButtonsAction from "@components/ButtonAction";
import { WrapperModule, ModuleTitle } from "./style";
import { useTranslation } from "react-i18next";
import { IFavoriteMovieModuleItem } from "./types";

const FavoriteMovieModuleItem = ({
  movie,
  handleWatchedMovie,
  deleteMovieById,
}: IFavoriteMovieModuleItem) => {
  const { t } = useTranslation("main-page");
  return (
    <WrapperModule>
      <ModuleTitle>{movie.title}</ModuleTitle>
      <ImageModuleWrapper
        src={`${DEFAULT_IMAGE_URL}${movie.poster_path}`}
        alt={t("favoriteMovies.altImage") as string}
      />
      <ModuleOverview>{movie.overview}</ModuleOverview>
      <ButtonsAction
        movie={movie}
        handleWatchedMovie={handleWatchedMovie}
        deleteMovieById={deleteMovieById}
      />
    </WrapperModule>
  );
};

export default FavoriteMovieModuleItem;
