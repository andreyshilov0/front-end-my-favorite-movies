import React from "react";
import { movieApi } from "@api/tmbdAPI";
import ListGenre from "@components/ListGenre";

const MainPage = () => {
  return (
    <>
      <header>Ваши избранные фильмы</header>

      <ListGenre />
    </>
  );
};

export default MainPage;
