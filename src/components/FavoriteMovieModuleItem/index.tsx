import React from "react";
import { TableCell } from "@mui/material";
import { DEFAULT_IMAGE_URL } from "@api/constants";
import { ImageWrapper } from "@components/FavoriteMovieListItem/style";
import ButtonsAction from "@components/ButtonAction";
import { ModuleHeader, WrapperModule } from "./style";
import { useTranslation } from "react-i18next";
import { IFavoriteMovieProps } from "@components/FavoriteMovieList/types";

const FavoriteMovieModuleItem = ({
  movie,
  handleWatchedMovie,
  deleteMovieById,
}: IFavoriteMovieProps) => {
  const { t } = useTranslation("main-page");
  return (
    <WrapperModule>
      <ModuleHeader>
        <h3>{movie?.title}</h3>
      </ModuleHeader>
    </WrapperModule>
  );
};

export default FavoriteMovieModuleItem;
