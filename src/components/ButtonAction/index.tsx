import React, { useState } from "react";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { MovieAction } from "./style";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { useDispatch } from "react-redux";

const ButtonsAction = () => {
  const [isWatched, setIsWatched] = useState(false);
  const dispatch = useDispatch();

  return (
    <MovieAction>
      <Tooltip
        title={isWatched ? "Просмотрено" : "Добавить в список просмотров"}
      >
        <IconButton onClick={() => setIsWatched(isWatched ? false : true)}>
          <DoneOutlineIcon color={isWatched ? "disabled" : "primary"} />
        </IconButton>
      </Tooltip>
      <Tooltip title="Удалить фильм">
        <IconButton>
          <HighlightOffIcon />
        </IconButton>
      </Tooltip>
    </MovieAction>
  );
};

export default ButtonsAction;
