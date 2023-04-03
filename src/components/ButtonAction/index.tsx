import React, { useState } from "react";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { MovieAction } from "./style";
import { IFavoriteMovieProps } from "@components/FavoriteMovieList/types";
import Button from "@mui/material/Button";

const ButtonsAction = ({
  deleteMovieById,
  handleWatchedMovie,
  movie,
}: IFavoriteMovieProps) => {
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
