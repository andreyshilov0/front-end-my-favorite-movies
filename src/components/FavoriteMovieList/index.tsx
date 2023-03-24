import React from "react";
import { Table, TableRow } from "@mui/material";
import { Container } from "@mui/system";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";

const FavoriteMovieList = () => {
  return (
    <Container>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Название фильма</TableCell>
            <TableCell>Описание фильма</TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </Container>
  );
};

export default FavoriteMovieList;
