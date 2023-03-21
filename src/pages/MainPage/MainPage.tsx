import React from "react";
import ListGenre from "@components/ListGenre";
import { WrapperGenre, WrapperMovie } from "./style";
import FavoriteMovie from "@components/FavoriteMovie";

const MainPage = () => {
  return (
    <>
      <WrapperGenre>
        Выберите жанр
        <ListGenre />
      </WrapperGenre>
      <WrapperMovie>
        <FavoriteMovie />
      </WrapperMovie>
    </>
  );
};

export default MainPage;
