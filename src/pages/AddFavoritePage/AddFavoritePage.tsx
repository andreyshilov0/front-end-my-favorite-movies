import React from "react";
import { WrapperFavoritePage, WrapperMovie } from "./style";
import { useTranslation } from "react-i18next";
import AddFavoriteMovieOption from "@components/AddFavoriteMovieOption";
import AddFavoriteMovie from "@components/AddFavoriteMovie";

const AddFavoritePage = () => {
  const { t } = useTranslation("main-page");
  return (
    <>
      <WrapperFavoritePage>
        {t("genres.selectedGenres")}
        <AddFavoriteMovieOption />
      </WrapperFavoritePage>
      <WrapperMovie>
        <AddFavoriteMovie />
      </WrapperMovie>
    </>
  );
};

export default AddFavoritePage;
