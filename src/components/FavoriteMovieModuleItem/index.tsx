import React from "react";
import { TableCell } from "@mui/material";
import { DEFAULT_IMAGE_URL } from "@api/constants";
import { ImageWrapper } from "@components/FavoriteMovieListItem/style";
import ButtonsAction from "@components/ButtonAction";
import { ModuleHeader, WrapperModule } from "./style";
import { useTranslation } from "react-i18next";

const FavoriteMovieModuleItem = ({
  movie,
  handleWatchedMovie,
  deleteMovieById,
}: any) => {
  const { t } = useTranslation("main-page");
  return (
    <WrapperModule>
      <ModuleHeader>
        <h3>{movie?.title}</h3>
      </ModuleHeader>
      <TableCell align="center">
        <ImageWrapper
          src={`${DEFAULT_IMAGE_URL}/${movie.poster_path}`}
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
