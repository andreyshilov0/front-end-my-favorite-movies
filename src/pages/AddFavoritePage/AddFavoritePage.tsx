import React from "react";
import { WrapperFavoritePage } from "./style";
import { useTranslation } from "react-i18next";
import AddFavoriteMovieOption from "@components/AddFavoriteMovieOption";

const AddFavoritePage = () => {
  const { t } = useTranslation("main-page");
  return (
    <>
      <WrapperFavoritePage>
        {t("genres.selectedGenres")}
        <AddFavoriteMovieOption />
      </WrapperFavoritePage>
    </>
  );
};

export default AddFavoritePage;
