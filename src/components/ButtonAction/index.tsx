import React, { useState } from "react";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { MovieAction } from "./style";
import Button from "@mui/material/Button";
import { IButtonAction } from "./types";
import { useFavoriteMovieUpdateWatched } from "@components/FavoriteMovie/hooks/useFavoriteMovieUpdateWatched";

const ButtonsAction = ({
  deleteMovieById,
  movie,
}: IButtonAction) => {
  const [isWatched, setIsWatched] = useState<boolean>(movie.watched);
  const { updateMovieWatchedById } = useFavoriteMovieUpdateWatched();

  const handleUpdateWatched = async () => {
    await updateMovieWatchedById(movie.id);
    setIsWatched(!isWatched);
  };

  return (
    <MovieAction>
      <Button onClick={handleUpdateWatched}>
        <DoneOutlineIcon color={isWatched ? "disabled" : "primary"} />
      </Button>

      <Button onClick={() => deleteMovieById(movie.id)}>
        <HighlightOffIcon color="action" />
      </Button>
    </MovieAction>
  );
};

export default ButtonsAction;
