import {
  AddMovieListWrapper,
  AddFavoriteMoviePaper,
  ImageWrapper,
  MovieWrapperOverview,
  AddMovieButtonList,
  AddFavoriteBodyWrapper,
} from "./style";
import { Typography } from "@mui/material";
import { DEFAULT_IMAGE_URL } from "@api/constants";
import { useTranslation } from "react-i18next";
import { IAddFavoriteMoviesList } from "./types";

const AddFavoriteMovieList = ({
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
                <AddMovieButtonList
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
                </AddMovieButtonList>
              </AddFavoriteBodyWrapper>
            </AddFavoriteMoviePaper>
          );
        })}
    </AddMovieListWrapper>
  );
};

export default AddFavoriteMovieList;
