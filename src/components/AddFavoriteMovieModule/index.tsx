import React, { useEffect } from "react";
import {
  AddFavoriteWrapperModule,
  AddModuleTitle,
  ImageModuleWrapper,
  AddModuleOverview,
  AddMovieButton,
  AddFavoriteBodyWrapper,
} from "./style";
import { DEFAULT_IMAGE_URL } from "@api/constants";
import { useTranslation } from "react-i18next";
import { Pagination } from "@mui/material";
import { IAddFavoriteMoviesModule } from "./types";

const AddFavoriteMovieModule = ({
  moviesDate,
  saveMovieId,
  isSelectButtonMovieId,
  numberPage,
  setNumberPage,
}: IAddFavoriteMoviesModule | any) => {
  const { t } = useTranslation("add-favorite");

  return (
    <AddFavoriteWrapperModule>
      {moviesDate &&
        moviesDate.map((movie: any) => {
          return (
            <AddFavoriteBodyWrapper key={movie.id}>
              <AddModuleTitle>{movie.title}</AddModuleTitle>
              <AddModuleTitle>{movie.release_date}</AddModuleTitle>
              <ImageModuleWrapper
                src={`${DEFAULT_IMAGE_URL}${movie.poster_path}`}
              />
              <AddModuleOverview>{movie.overview}</AddModuleOverview>
              <AddMovieButton
                variant={
                  isSelectButtonMovieId.includes(movie.id)
                    ? "outlined"
                    : "contained"
                }
                onClick={() => {
                  saveMovieId(movie.id);
                }}
              >
                {t("option.button-add")}
              </AddMovieButton>
            </AddFavoriteBodyWrapper>
          );
        })}

      <Pagination
        page={numberPage}
        count={500}
        onChange={(_, index) => {
          setNumberPage(index);
        }}
      />
    </AddFavoriteWrapperModule>
  );
};

export default AddFavoriteMovieModule;
