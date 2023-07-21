import { useState } from "react";
import ListGenre from "@components/ListGenre";
import { WrapperGenre, WrapperMovie } from "./style";
import FavoriteMovie from "@components/FavoriteMovie";
import { useTranslation } from "react-i18next";

const MainPage = () => {
  const { t } = useTranslation("main-page");
  const [genre, setGenre] = useState<number[]>([]);
  return (
    <>
      <WrapperGenre>
        {t("genres.selectedGenres")}
        <ListGenre setChangeGenresId={setGenre} />
      </WrapperGenre>
      <WrapperMovie>
        <FavoriteMovie />
      </WrapperMovie>
    </>
  );
};

export default MainPage;
