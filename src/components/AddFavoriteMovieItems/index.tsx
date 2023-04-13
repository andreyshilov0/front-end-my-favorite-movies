import {
  AddMovieListWrapper,
  AddFavoriteMoviePaper,
  ImageWrapper,
  MovieWrapperOverview,
  AddMovieButton,
  AddFavoriteBodyWrapper,
  MoviePagination,
} from "./style";
import { Typography } from "@mui/material";
import { DEFAULT_IMAGE_URL } from "@api/constants";
import { useTranslation } from "react-i18next";
import { IAddFavoriteMoviesList } from "./types";

const AddFavoriteMovieItems = ({
  moviesData,
  saveMovieId,
  addSelectedToArrayMovieById,
  blockView,
  numberPage,
  setNumberPage,
  totalPage,
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
                    addSelectedToArrayMovieById.includes(movie.id)
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
      <MoviePagination
        page={numberPage}
        count={totalPage}
        onChange={(_, index) => setNumberPage(index)}
      />
    </AddMovieListWrapper>
  );
};

export default AddFavoriteMovieItems;
