import {
  ImageWrapper,
  WrapperListItem,
  WrapperOverview,
  WrapperTitle,
} from "./style";
import ButtonsAction from "@components/ButtonAction";
import { DEFAULT_IMAGE_URL } from "constants/constants";
import { useTranslation } from "react-i18next";
import { IFavoriteMovieListItem } from "./types";

const FavoriteMovieListItem = ({
  movie,
  deleteMovieById,
  updateMovieWatchedById,
}: IFavoriteMovieListItem) => {
  const { t } = useTranslation("main-page");

  return (
    <WrapperListItem>
      <WrapperTitle>{movie.title}</WrapperTitle>
      <ImageWrapper
        src={`${DEFAULT_IMAGE_URL}${movie.imageUrl}`}
        alt={t("favoriteMovies.altImage") as string}
      />
      <WrapperOverview>{movie.description}</WrapperOverview>
      <ButtonsAction
        movie={movie}
        updateMovieWatchedById={updateMovieWatchedById}
        deleteMovieById={deleteMovieById}
      />
    </WrapperListItem>
  );
};

export default FavoriteMovieListItem;
