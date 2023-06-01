import { Typography } from "@mui/material";
import FavoriteMovieListItem from "@components/FavoriteMovieListItem";
import { useTranslation } from "react-i18next";
import { ListWrapper, ListWrapperListHeader, ListWrapperBody } from "./style";
import { IFavoriteMovieList } from "./types";

const FavoriteMovieList = ({
  userFavoriteMovies,
  deleteMovieById,
  updateMovieWatchedById,
}: IFavoriteMovieList) => {
  const { t } = useTranslation("main-page");

  return (
    <ListWrapper>
      <ListWrapperListHeader>
        <Typography>{t("favoriteFilms.nameFilms")}</Typography>
        <Typography>{t("favoriteFilms.overview")}</Typography>
      </ListWrapperListHeader>

      <ListWrapperBody>
        {userFavoriteMovies &&
          userFavoriteMovies.map((movie: any) => (
            <FavoriteMovieListItem
              key={movie.id}
              updateMovieWatchedById={updateMovieWatchedById}
              deleteMovieById={deleteMovieById}
              movie={movie}
            />
          ))}
      </ListWrapperBody>
    </ListWrapper>
  );
};

export default FavoriteMovieList;
