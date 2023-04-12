import { Typography } from "@mui/material";
import FavoriteMovieListItem from "@components/FavoriteMovieListItem";
import { useTranslation } from "react-i18next";
import { ListWrapper, ListWrapperListHeader, ListWrapperBody } from "./style";
import { IFavoriteMovieList } from "./types";
import { handleChangeMovieWatched } from "@components/helpers/handleWatched";

const FavoriteMovieList = ({
  moviesData,
  deleteMovieById,
}: IFavoriteMovieList) => {
  const { t } = useTranslation("main-page");

  const handleWatchedMovie = (id: number) => {
    handleChangeMovieWatched(moviesData, id);
  };

  return (
    <ListWrapper>
      <ListWrapperListHeader>
        <Typography>{t("favoriteFilms.nameFilms")}</Typography>
        <Typography>{t("favoriteFilms.overview")}</Typography>
      </ListWrapperListHeader>

      <ListWrapperBody>
        {moviesData.map((movie) => (
          <FavoriteMovieListItem
            key={movie.id}
            handleWatchedMovie={handleWatchedMovie}
            deleteMovieById={deleteMovieById}
            movie={movie}
          />
        ))}
      </ListWrapperBody>
    </ListWrapper>
  );
};

export default FavoriteMovieList;
