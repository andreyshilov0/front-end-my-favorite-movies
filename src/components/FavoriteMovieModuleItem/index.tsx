import React from "react";
import { DEFAULT_IMAGE_URL } from "constants/constants";
import { ImageModuleWrapper, ModuleOverview } from "./style";
import ButtonsAction from "@components/ButtonAction";
import { WrapperModule, ModuleTitle } from "./style";
import { useTranslation } from "react-i18next";
import { IFavoriteMovieModuleItem } from "./types";

const FavoriteMovieModuleItem = ({
  movie,
  updateMovieWatchedById,
  deleteMovieById,
}: IFavoriteMovieModuleItem) => {
  const { t } = useTranslation("main-page");
  return (
    <WrapperModule>
      <ModuleTitle>{movie.title}</ModuleTitle>
      <ImageModuleWrapper
        src={`${DEFAULT_IMAGE_URL}${movie.imageUrl}`}
        alt={t("favoriteMovies.altImage") as string}
      />
      <ModuleOverview>{movie.description}</ModuleOverview>
      <ButtonsAction
        movie={movie}
        updateMovieWatchedById={updateMovieWatchedById}
        deleteMovieById={deleteMovieById}
      />
    </WrapperModule>
  );
};

export default FavoriteMovieModuleItem;
