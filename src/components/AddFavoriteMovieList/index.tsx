import {
  AddMovieListWrapper,
  AddFavoriteMoviePaper,
  ImageWrapper,
  MovieWrapper,
  AddMovieButtonList,
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
    <AddMovieListWrapper>
      {moviesData &&
        moviesData.map((movie) => {
          return (
            <AddFavoriteMoviePaper key={movie.id}>
              <Typography>{movie.title}</Typography>
              <Typography>{movie.release_date}</Typography>
              <ImageWrapper
                src={`${DEFAULT_IMAGE_URL}${movie.backdrop_path}`}
                alt={`${t("option.altImage")}`}
              />
              <MovieWrapper>{movie.overview}</MovieWrapper>
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
            </AddFavoriteMoviePaper>
          );
        })}
    </AddMovieListWrapper>
  );
};

export default AddFavoriteMovieList;
