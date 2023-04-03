import React, { useState } from "react";
import {
  ContainerBlock,
  MainPaper,
  FavoriteBlockStyle,
  LinkButton,
} from "./style";
import ButtonView from "@components/ButtonView";
import FavoriteMovieList from "@components/FavoriteMovieList";
import { useTranslation } from "react-i18next";

const FavoriteMovie = () => {
  const [view, setView] = useState(false);

  const { t } = useTranslation("main-page");
  return (
    <MainPaper>
      {t("favoriteFilms.titleName")}
      <ContainerBlock>
        <LinkButton to={"/add-favorite"}>
          {t("favoriteFilms.buttonAddFilms")}
        </LinkButton>
        <ButtonView
          viewBlock={!view}
          onClick={() => setView(false)}
          name={t("favoriteFilms.list")}
        />
        <ButtonView
          viewBlock={view}
          onClick={() => setView(true)}
          name={t("favoriteFilms.module")}
        />
      </ContainerBlock>
      <FavoriteBlockStyle>
        <FavoriteMovieList />
      </FavoriteBlockStyle>
    </MainPaper>
  );
};

export default FavoriteMovie;
