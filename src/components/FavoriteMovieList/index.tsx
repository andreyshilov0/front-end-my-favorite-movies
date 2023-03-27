import React from "react";
import { TableCell, TableRow } from "@mui/material";
import { IObjectMovieData } from "@components/FavoriteMovie/types";
import { Paper, Table, TableHead, TableBody } from "@mui/material";
import FavoriteMovieListItem from "@components/FavoriteMovieListItem";

const FavoriteMovieList = ({ movieData }: IObjectMovieData) => {
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="justify" colSpan={2}>
              Фильм
            </TableCell>
            <TableCell align="justify">Описание</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {movieData?.map((item) => (
            <FavoriteMovieListItem key={item.id} movie={item} />
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default FavoriteMovieList;
