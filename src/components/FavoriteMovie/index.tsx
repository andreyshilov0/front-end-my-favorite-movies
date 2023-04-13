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

const FavoriteMovie = () => {
  const [moviesData, setMoviesData] = useState<Array<IMovieData>>([]);
  const [blockView, setBlockView] = useState<boolean>(false);
  const [moviesId, setMoviesId] = useState<number[]>(parseMovieId);

  const deleteMovieById = (movieId: number) => {
    setMoviesData(moviesData.filter((film) => film.id !== movieId));
  };

  useEffect(() => {
    moviesId.map((film) => {
      getDataMovieById(film).then((res) => {
        setMoviesData((prev) => prev.concat(res ? res : []));
      });
    });
  }, []);

  useEffect(() => {
    const newMovieId = moviesData.map((film) => film.id);
    addMovieId(newMovieId);
    setMoviesId(newMovieId);
  }, [moviesData]);

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
            moviesData={moviesData}
            deleteMovieById={deleteMovieById}
          />
        ) : (
          <FavoriteMovieList
            moviesData={moviesData}
            deleteMovieById={deleteMovieById}
          />
        )}
      </FavoriteBlockStyle>
    </MainPaper>
  );
};

export default FavoriteMovie;
