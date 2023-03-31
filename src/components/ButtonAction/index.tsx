import React, { useState } from "react";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { MovieAction } from "./style";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { useTranslation } from "react-i18next";

const ButtonsAction = ({ deleteMovieById, watchedMovie, movie }: any) => {
  const [isWatched, setIsWatched] = useState<boolean>(false);

  const { t } = useTranslation("main-page");

  return (
    <MovieAction>
      <Tooltip
        title={
          isWatched
            ? t("favoriteFilms.actionAddFavorite")
            : t("favoriteFilms.actionRemoveFavorite")
        }
      >
        <IconButton
          onClick={() =>
            setIsWatched(!!watchedMovie(movie.user_watched) ? true : false)
          }
        >
          <DoneOutlineIcon color={isWatched ? "disabled" : "primary"} />
        </IconButton>
      </Tooltip>
      <Tooltip title={t("favoriteFilms.deleteFavorite")}>
        <IconButton onClick={() => deleteMovieById(movie.id)}>
          <HighlightOffIcon />
        </IconButton>
      </Tooltip>
    </MovieAction>
  );
};

export default ButtonsAction;
