import React, { useEffect, useState } from "react";
import {
  ContainerBlock,
  MainPaper,
  FavoriteBlockStyle,
  LinkButton,
} from "./style";
import ButtonView from "@components/ButtonView";
import FavoriteMovieList from "@components/FavoriteMovieList";
import { useTranslation } from "react-i18next";
import FavoriteMovieModule from "@components/FavoriteMovieModule";
import { getDataMovieById } from "@api/tmbdAPI";
import { addMovieId } from "@components/helpers/isValidAddMoviesId";
import { IMovieData } from "@api/types";
import { parseMovieId } from "@components/helpers/isValidAddMoviesId";
import { FAVORITE_MOVIES, useFavoriteMovies } from "./hooks/useFavoriteMovies";
import { useFavoriteMovieDelete } from "./hooks/useFavoriteMovieDelete";
import { useMutation } from "@apollo/client";
import { FAVORITE_MOVIE_DELETE } from "./hooks/useFavoriteMovieDelete";
import {
  FAVORITE_MOVIE_UPDATE_WATCHED,
  useFavoriteMovieUpdateWatched,
} from "./hooks/useFavoriteMovieUpdateWatched";

const FavoriteMovie = () => {
  const { userFavoriteMovies } = useFavoriteMovies();
  const [favoriteMovieDelete, { }] = useFavoriteMovieDelete();
  const [moviesData, setMoviesData] = useState<Array<IMovieData>>([]);
  const [blockView, setBlockView] = useState<boolean>(false);
  // const [moviesId, setMoviesId] = useState<number[]>(parseMovieId);

  const [FavoriteMovieUpdateWatched, { loading }] = useMutation(
    FAVORITE_MOVIE_UPDATE_WATCHED,
    { refetchQueries: [FAVORITE_MOVIES] }
  );
  const [favoriteMovieUpdateWatched, { }] = useFavoriteMovieUpdateWatched();

  const { t } = useTranslation("main-page");

  return (
    <MainPaper>
      {t("favoriteFilms.titleName")}
      <ContainerBlock>
        <LinkButton to={"/add-favorite"}>
          {t("favoriteFilms.buttonAddFilms")}
        </LinkButton>
        <ButtonView
          viewBlock={!blockView}
          onClick={() => setBlockView(false)}
          name={t("favoriteFilms.list")}
        />
        <ButtonView
          viewBlock={blockView}
          onClick={() => setBlockView(true)}
          name={t("favoriteFilms.module")}
        />
      </ContainerBlock>
      <FavoriteBlockStyle>
        {blockView ? (
          <FavoriteMovieModule
            userFavoriteMovies={userFavoriteMovies}
            updateMovieWatchedById={favoriteMovieUpdateWatched}
            deleteMovieById={favoriteMovieDelete}
          />
        ) : (
          <FavoriteMovieList
            userFavoriteMovies={userFavoriteMovies}
            deleteMovieById={favoriteMovieDelete}
            updateMovieWatchedById={favoriteMovieUpdateWatched}
          />
        )}
      </FavoriteBlockStyle>
    </MainPaper>
  );
};

export default FavoriteMovie;

// useEffect(() => {
//   moviesId.map((film) => {
//     getDataMovieById(film).then((res) => {
//       setMoviesData((prev) => prev.concat(res ? res : []));
//     });
//   });
// }, []);

// useEffect(() => {
//   setMoviesId([]);
//   const newMovieId = moviesData.map((film) => film.id);
//   addMovieId(newMovieId);
//   setMoviesId(newMovieId);
// }, [moviesData]);
