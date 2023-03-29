import React from "react";
import { TableCell } from "@mui/material";
import { IObjectMovieDataItem } from "@components/FavoriteMovieListItem/types";
import { BASE_IMAGE_PATH } from "@api/constants";
import { ImageWrapper } from "@components/FavoriteMovieListItem/style";
import ButtonsAction from "@components/ButtonAction";
import { ModuleHeader, WrapperModule } from "./style";
import { useTranslation } from "react-i18next";

const FavoriteMovieModuleItem = ({ movie }: IObjectMovieDataItem) => {
  const { t } = useTranslation("main-page");
  return (
    <WrapperModule>
      <ModuleHeader>
        <h3>{movie?.title}</h3>
      </ModuleHeader>
      <TableCell align="center">
        <ImageWrapper
          src={`${BASE_IMAGE_PATH}/${movie.poster_path}`}
          alt={t("favoriteMovies.altImage") as string}
        />
      </TableCell>
      <TableCell>{movie?.overview}</TableCell>
      <TableCell>
        <ButtonsAction />
      </TableCell>
    </WrapperModule>
  );
};

export default FavoriteMovieModuleItem;
