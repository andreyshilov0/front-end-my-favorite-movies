import React, { useState } from "react";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { MovieAction } from "./style";
import Button from "@mui/material/Button";
import { IButtonAction } from "./types";

const ButtonsAction = ({
  deleteMovieById,
  updateMovieWatchedById,
  movie,
}: IButtonAction) => {
  const [isWatched, setIsWatched] = useState<boolean>(movie.watched);

  return (
    <MovieAction>
      <Button onClick={() => updateMovieWatchedById(movie.id)}>
        <DoneOutlineIcon color={isWatched ? "disabled" : "primary"} />
      </Button>

      <Button onClick={() => deleteMovieById(movie.id)}>
        <HighlightOffIcon color="action" />
      </Button>
    </MovieAction>
  );
};

export default ButtonsAction;
