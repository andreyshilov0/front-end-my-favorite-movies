import { Typography } from "@mui/material";
import FavoriteMovieListItem from "@components/FavoriteMovieListItem";
import { useTranslation } from "react-i18next";
import { ListWrapper, ListWrapperListHeader, ListWrapperBody } from "./style";
import { IFavoriteMovieList } from "./types";
import { handleChangeMovieWatched } from "@components/helpers/handleWatched";

const FavoriteMovieList = ({
  moviesDate,
  deleteMovieById,
}: IFavoriteMovieList) => {
  const { t } = useTranslation("main-page");

  const handleWatchedMovie = (id: number) => {
    handleChangeMovieWatched(moviesDate, id);
  };

  return (
    <ListWrapper>
      <ListWrapperListHeader>
        <Typography>{t("favoriteFilms.nameFilms")}</Typography>
        <Typography>{t("favoriteFilms.overview")}</Typography>
      </ListWrapperListHeader>

      <ListWrapperBody>
        {moviesDate.map((movie) => (
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
