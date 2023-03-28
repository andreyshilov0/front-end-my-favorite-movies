import React, { useState } from "react";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { MovieAction } from "./style";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { useDispatch } from "react-redux";
import { deleteMovie } from "@store/movies";
import { useTranslation } from "react-i18next";

const ButtonsAction = () => {
  const [isWatched, setIsWatched] = useState(false);
  const dispatch = useDispatch();
  const { t } = useTranslation("main-page");

  return (
    <MovieAction>
      <Tooltip
        title={
          isWatched
            ? t("FavoriteFilms.actionAddFavorite")
            : t("FavoriteFilms.actionRemoveFavorite")
        }
      >
        <IconButton onClick={() => setIsWatched(isWatched ? false : true)}>
          <DoneOutlineIcon color={isWatched ? "disabled" : "primary"} />
        </IconButton>
      </Tooltip>
      <Tooltip title={t("FavoriteFilms.deleteFavorite")}>
        <IconButton onClick={() => dispatch(deleteMovie)}>
          <HighlightOffIcon />
        </IconButton>
      </Tooltip>
    </MovieAction>
  );
};

export default ButtonsAction;
