import React, { useEffect, useState } from "react";
import {
  ContainerBlock,
  MainPaper,
  FavoriteBlockStyle,
  LinkButton,
  MoviesPagination,
} from "./style";
import ButtonView from "@components/ButtonView";
import FavoriteMovieList from "@components/FavoriteMovieList";
import { useTranslation } from "react-i18next";
import FavoriteMovieModule from "@components/FavoriteMovieModule";
import { getDataMovieById } from "@api/tmbdAPI";

const FavoriteMovie = () => {
  const [moviesDate, setMoviesDate] = useState<any[]>([]);
  const [blockView, setBlockView] = useState<boolean>(false);
  const [moviesId, setMoviesId] = useState<number[]>(
    JSON.parse(localStorage["movieId"])
  );

  const deleteMovieById = (filmId: number) => {
    setMoviesDate(moviesDate.filter((film: any) => film.id !== filmId));
  };

  useEffect(() => {
    setMoviesDate([]);
    moviesId.map((film) => {
      getDataMovieById(film).then((res) => {
        setMoviesDate((prev) => prev.concat({ ...res }));
      });
    });
  }, []);

  useEffect(() => {
    let newMovieId = moviesDate.map((film) => film.id);
    localStorage.setItem("movieId", JSON.stringify(newMovieId));
    setMoviesId(newMovieId);
  }, [moviesDate]);

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
            moviesDate={moviesDate}
            deleteMovieById={deleteMovieById}
          />
        ) : (
          <FavoriteMovieList
            moviesDate={moviesDate}
            deleteMovieById={deleteMovieById}
          />
        )}
      </FavoriteBlockStyle>
      <MoviesPagination page={5} />
    </MainPaper>
  );
};

export default FavoriteMovie;
