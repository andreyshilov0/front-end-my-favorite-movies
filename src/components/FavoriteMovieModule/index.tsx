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
import { IObjectMovieData } from "@components/FavoriteMovie/types";
import FavoriteMovieModuleItem from "@components/FavoriteMovieModuleItem";

const FavoriteMovieModule = ({ movieData }: IObjectMovieData) => {
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
        <TableBody>
          {movieData?.map((item) => (
            <FavoriteMovieModuleItem key={item.id} movie={item} />
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default FavoriteMovieModule;
