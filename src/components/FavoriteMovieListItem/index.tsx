import React from "react";
import { IObjectMovieDataItem } from "./types";
import { TableRow, TableCell } from "@mui/material";
import { ImageWrapper } from "./style";
import ButtonsAction from "@components/ButtonAction";
import { IMAGE_PATH } from "@api/constants";

const FavoriteMovieListItem = ({ movie }: IObjectMovieDataItem) => {
  return (
    <TableRow>
      <TableCell>
        <h3>{movie?.title}</h3>
      </TableCell>
      <TableCell align="center">
        <ImageWrapper src={`${IMAGE_PATH}`} alt="Image" />
      </TableCell>
      <TableCell>{movie?.overview}</TableCell>
      <TableCell align="right">
        <ButtonsAction />
      </TableCell>
    </TableRow>
  );
};

export default FavoriteMovieListItem;
