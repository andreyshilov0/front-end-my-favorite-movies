import React from "react";
import { TableCell, TableRow } from "@mui/material";
import { IObjectMovieData } from "@components/FavoriteMovie/types";
import { Paper, Table, TableHead, TableBody } from "@mui/material";
import FavoriteMovieListItem from "@components/FavoriteMovieListItem";
import { useTranslation } from "react-i18next";

const FavoriteMovieList = ({ movieData }: IObjectMovieData) => {
  const { t } = useTranslation("main-page");
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="justify" colSpan={2}>
              {t("FavoriteFilms.nameFilms")}
            </TableCell>
            <TableCell align="justify">{t("FavoriteFilms.overview")}</TableCell>
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
