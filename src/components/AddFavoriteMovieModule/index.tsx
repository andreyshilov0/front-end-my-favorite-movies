import {
  AddFavoriteWrapperModule,
  AddModuleTitle,
  ImageModuleWrapper,
  AddModuleOverview,
  AddMovieButton,
  AddFavoriteBodyWrapper,
  AddFavoriteWrapContainer,
} from "./style";
import { DEFAULT_IMAGE_URL } from "@api/constants";
import { useTranslation } from "react-i18next";
import { IAddFavoriteMoviesModule } from "./types";

const AddFavoriteMovieModule = ({
  moviesData,
  saveMovieId,
  addSelectedMovieById,
}: IAddFavoriteMoviesModule) => {
  const { t } = useTranslation("add-favorite");

  return (
    <AddFavoriteWrapperModule>
      {moviesData &&
        moviesData.map((movie) => {
          return (
            <AddFavoriteWrapContainer key={movie.id}>
              <AddFavoriteBodyWrapper>
                <AddModuleTitle>{movie.title}</AddModuleTitle>
                <AddModuleTitle>{movie.release_date}</AddModuleTitle>
                <ImageModuleWrapper
                  src={`${DEFAULT_IMAGE_URL}${movie.poster_path}`}
                  alt={`${t("option.altImage")}`}
                />
                <AddModuleOverview>{movie.overview}</AddModuleOverview>
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
            </AddFavoriteWrapContainer>
          );
        })}
    </AddFavoriteWrapperModule>
  );
};

export default AddFavoriteMovieModule;
