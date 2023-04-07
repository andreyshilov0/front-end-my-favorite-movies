import React from "react";
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

const AddFavoriteMovieModule = ({ moviesDate, saveMovieId }: any) => {
  const { t } = useTranslation("add-favorite");

  return (
    <AddFavoriteWrapperModule>
      {moviesDate &&
        moviesDate.map((movie: any, index: any) => {
          return (
            <AddFavoriteBodyWrapper key={movie.id}>
              <AddModuleTitle>{movie.title}</AddModuleTitle>
              <AddModuleTitle>{movie.release_date}</AddModuleTitle>
              <ImageModuleWrapper
                src={`${DEFAULT_IMAGE_URL}${movie.poster_path}`}
              />
              <AddModuleOverview>{movie.overview}</AddModuleOverview>
              <AddMovieButton
                variant="contained"
                onClick={() => {
                  saveMovieId(movie.id);
                }}
              >
                {t("option.button-add")}
              </AddMovieButton>
            </AddFavoriteBodyWrapper>
          );
        })}
    </AddFavoriteWrapperModule>
  );
};

export default AddFavoriteMovieModule;
