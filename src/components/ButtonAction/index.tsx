import React, { useState } from "react";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { MovieAction } from "./style";
import Button from "@mui/material/Button";
import { IButtonAction } from "./types";

const ButtonsAction = ({
  deleteMovieById,
  handleWatchedMovie,
  movie,
}: IButtonAction) => {
  const [isWatched, setIsWatched] = useState<boolean>(false);

  return (
    <MovieAction>
      <Button onClick={() => handleWatchedMovie(movie.id)}>
        <DoneOutlineIcon color={isWatched ? "disabled" : "primary"} />
      </Button>

      <Button onClick={() => deleteMovieById(movie.id)}>
        <HighlightOffIcon color="action" />
      </Button>
    </MovieAction>
  );
};

export default ButtonsAction;
