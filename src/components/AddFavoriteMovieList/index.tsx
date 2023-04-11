import {
  AddMovieListWrapper,
  AddFavoriteMoviePaper,
  ImageWrapper,
  MovieWrapper,
  AddMovieButton,
} from "./style";
import { Typography, Pagination } from "@mui/material";
import { DEFAULT_IMAGE_URL } from "@api/constants";
import { useTranslation } from "react-i18next";
import { IAddFavoriteMoviesList } from "./types";

const AddFavoriteMovieList = ({
  moviesDate,
  saveMovieId,
  isSelectButtonMovieId,
  numberPage,
  setNumberPage,
}: IAddFavoriteMoviesList | any) => {
  const { t } = useTranslation("add-favorite");

  return (
    <AddMovieListWrapper>
      {moviesDate &&
        moviesDate.map((movie: any) => {
          return (
            <AddFavoriteMoviePaper key={movie.id}>
              <Typography>{movie.title}</Typography>
              <Typography>{movie.release_date}</Typography>
              <ImageWrapper
                src={`${DEFAULT_IMAGE_URL}${movie.backdrop_path}`}
              />
              <MovieWrapper>{movie.overview}</MovieWrapper>
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
            </AddFavoriteMoviePaper>
          );
        })}

      <Pagination
        page={numberPage}
        count={500}
        onChange={(_, index) => {
          setNumberPage(index);
        }}
      />
    </AddMovieListWrapper>
  );
};

export default AddFavoriteMovieList;
