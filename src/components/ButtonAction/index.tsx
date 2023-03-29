import React, { useState } from "react";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { MovieAction } from "./style";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { useTranslation } from "react-i18next";

const ButtonsAction = () => {
  const [isWatched, setIsWatched] = useState(false);

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
        <IconButton onClick={() => setIsWatched(isWatched ? false : true)}>
          <DoneOutlineIcon color={isWatched ? "disabled" : "primary"} />
        </IconButton>
      </Tooltip>
      <Tooltip title={t("favoriteFilms.deleteFavorite")}>
        <IconButton>
          <HighlightOffIcon />
        </IconButton>
      </Tooltip>
    </MovieAction>
  );
};

export default ButtonsAction;
