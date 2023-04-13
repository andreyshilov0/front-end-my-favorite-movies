import {
  AddMovieListWrapper,
  AddFavoriteMoviePaper,
  ImageWrapper,
  MovieWrapperOverview,
  AddMovieButton,
  AddFavoriteBodyWrapper,
} from "./style";
import { Typography } from "@mui/material";
import { DEFAULT_IMAGE_URL } from "@api/constants";
import { useTranslation } from "react-i18next";
import { IAddFavoriteMoviesList } from "./types";

const AddFavoriteMovieItems = ({
  moviesData,
  saveMovieId,
  addSelectedMovieById,
  blockView,
}: IAddFavoriteMoviesList) => {
  const { t } = useTranslation("add-favorite");

  return (
    <AddMovieListWrapper blockView={blockView}>
      {moviesData &&
        moviesData.map((movie) => {
          return (
            <AddFavoriteMoviePaper key={movie.id}>
              <AddFavoriteBodyWrapper blockView={blockView}>
                <Typography>{movie.title}</Typography>
                <Typography>{movie.release_date}</Typography>
                <ImageWrapper
                  blockView={blockView}
                  src={`${DEFAULT_IMAGE_URL}${movie.backdrop_path}`}
                  alt={`${t("option.altImage")}`}
                />
                <MovieWrapperOverview blockView={blockView}>
                  {movie.overview}
                </MovieWrapperOverview>
                <AddMovieButton
                  variant={
                    addSelectedMovieById.includes(movie.id)
                      ? "outlined"
                      : "contained"
                  }
                  onClick={() => {
                    saveMovieId(movie.id);
                  }}
                >
                  {t("option.buttonAdd")}
                </AddMovieButton>
              </AddFavoriteBodyWrapper>
            </AddFavoriteMoviePaper>
          );
        })}
    </AddMovieListWrapper>
  );
};

export default AddFavoriteMovieItems;
