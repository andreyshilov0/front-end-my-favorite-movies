import React from "react";
import ListGenre from "@components/ListGenre";
import { WrapperGenre, WrapperMovie } from "./style";
import FavoriteMovie from "@components/FavoriteMovie";
import { useTranslation } from "react-i18next";

const MainPage = () => {
  const { t } = useTranslation("main-page");
  return (
    <>
      <WrapperGenre>
        {t("Genres.selectedGenres")}
        <ListGenre />
      </WrapperGenre>
      <WrapperMovie>
        <FavoriteMovie />
      </WrapperMovie>
    </>
  );
};

export default MainPage;
