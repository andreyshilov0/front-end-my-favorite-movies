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
import { DEFAULT_IMAGE_URL } from "constants/constants";
import { useTranslation } from "react-i18next";
import { IAddFavoriteMoviesList } from "./types";
import { useFavoriteMovieAdd } from "@components/AddFavoriteMovie/hooks/useFavoriteMovieAdd";

const AddFavoriteMovieItems = ({
  moviesData,
  addSelectedToArrayMovieById,
  blockView,
  currentPageNumber,
  setCurrentPageNumber,
  totalPageCount,
}: IAddFavoriteMoviesList) => {
  const [addMovieById] = useFavoriteMovieAdd();
  const { t } = useTranslation("add-favorite");

  return (
    <AddMovieListWrapper blockView={blockView}>
      {
        moviesData?.map((movie) => {
          return (
            <AddFavoriteMoviePaper key={movie.id}>
              <AddFavoriteBodyWrapper blockView={blockView}>
                <Typography>{movie.title}</Typography>
                <Typography>{movie.releaseDate}</Typography>
                <ImageWrapper
                  blockView={blockView}
                  src={`${DEFAULT_IMAGE_URL}${movie.posterPath}`}
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
                    addMovieById(movie.id);
                  }}
                >
                  {t("option.buttonAdd")}
                </AddMovieButton>
              </AddFavoriteBodyWrapper>
            </AddFavoriteMoviePaper>
          );
        })}
      <MoviePagination
        page={currentPageNumber}
        count={totalPageCount}
        onChange={(_, index) => setCurrentPageNumber(index)}
      />
    </AddMovieListWrapper>
  );
};

export default AddFavoriteMovieItems;
