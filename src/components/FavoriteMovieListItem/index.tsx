import {
  ImageWrapper,
  WrapperListItem,
  WrapperOverview,
  WrapperTitle,
} from "./style";
import ButtonsAction from "@components/ButtonAction";
import { DEFAULT_IMAGE_URL } from "@api/constants";
import { useTranslation } from "react-i18next";

const FavoriteMovieListItem = ({
  movie,
  handleWatchedMovie,
  deleteMovieById,
}: any) => {
  const { t } = useTranslation("main-page");

  return (
    <WrapperListItem>
      <WrapperTitle>{movie.title}</WrapperTitle>
      <ImageWrapper
        src={`${DEFAULT_IMAGE_URL}${movie.poster_path}`}
        alt={t("favoriteMovies.altImage") as string}
      />
      <WrapperOverview>{movie.overview}</WrapperOverview>
      <ButtonsAction
        movie={movie}
        watchedMovie={handleWatchedMovie}
        deleteMovieById={deleteMovieById}
      />
    </WrapperListItem>
  );
};

export default FavoriteMovieListItem;
