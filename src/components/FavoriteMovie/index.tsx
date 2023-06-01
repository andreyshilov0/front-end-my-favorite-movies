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
import { useFavoriteMovies } from "./hooks/useFavoriteMovies";
import { useFavoriteMovieDelete } from "./hooks/useFavoriteMovieDelete";
import { useFavoriteMovieUpdateWatched } from "./hooks/useFavoriteMovieUpdateWatched";

const FavoriteMovie = () => {
  const { userFavoriteMovies } = useFavoriteMovies();
  const [favoriteMovieDelete, { }] = useFavoriteMovieDelete();
  const [blockView, setBlockView] = useState<boolean>(false);
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
