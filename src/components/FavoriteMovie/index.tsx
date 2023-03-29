import React, { useEffect, useState } from "react";
import {
  ContainerBlock,
  ButtonBlock,
  MainPaper,
  FavoriteBlockStyle,
} from "./style";
import ButtonView from "@components/ButtonView";
import FavoriteMovieList from "@components/FavoriteMovieList";
import { useTranslation } from "react-i18next";
import FavoriteMovieModule from "@components/FavoriteMovieModule";
import { Link } from "react-router-dom";

const FavoriteMovie = () => {
  const [view, setView] = useState(false);

  const { t } = useTranslation("main-page");
  return (
    <>
      <MainPaper>
        {t("favoriteFilms.titleName")}
        <ContainerBlock>
          <Link to={"/add-favorite"}>
            <ButtonBlock variant="contained">
              {t("favoriteFilms.buttonAddFilms")}
            </ButtonBlock>
          </Link>
          <ButtonView viewBlock={!view} name={t("favoriteFilms.list")} />
          <ButtonView viewBlock={view} name={t("favoriteFilms.module")} />
        </ContainerBlock>
        <FavoriteBlockStyle>
          <FavoriteMovieList />
          {/* <FavoriteMovieModule movieData={movieData} /> */}
        </FavoriteBlockStyle>
      </MainPaper>
    </>
  );
};

export default FavoriteMovie;
