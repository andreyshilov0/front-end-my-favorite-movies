import React from "react";
import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { useTranslation } from "react-i18next";

const FavoriteMovieModule = () => {
  const { t } = useTranslation("main-page");
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="justify">
              {t("favoriteFilms.nameFilms")}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody></TableBody>
      </Table>
    </Paper>
  );
};

export default FavoriteMovieModule;
