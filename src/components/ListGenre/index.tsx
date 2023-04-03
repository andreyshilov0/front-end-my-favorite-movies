import { useState, useEffect } from "react";
import { ListWrapper } from "./style";
import { getGenres } from "@api/tmbdAPI";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import LanguageButton from "@components/LanguageButton";
import { IGenresData } from "./types";
import {
  handleChangeSelectedIdGenres,
  setAllGengresToLocalStorage,
} from "@components/helpers/ChangeSelected";

const ListGenre = () => {
  const [genres, setGenres] = useState<IGenresData[]>([]);
  const [languageGenres, setLanguageGenres] = useState<string>("ru");

  const { t, i18n } = useTranslation();

  const getGenresData = (language: string) => {
    getGenres(language).then((res) => {
      if (res)
        setGenres(
          res.map((genres) => ({
            id: genres.id,
            name: genres.name,
            isSelected: false,
          }))
        );
    });
  };

  const handleChangeSelected = (id: number) => {
    genres[id].isSelected = !genres[id].isSelected;

    setGenres([...genres]);
    setAllGengresToLocalStorage(genres);
    handleChangeSelectedIdGenres(id);
  };

  const changeLanguage = (lang: string): void => {
    setLanguageGenres(lang);
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    getGenresData(languageGenres);
  }, [languageGenres]);

  return (
    <ListWrapper>
      {genres.map((genres, id) => (
        <Button
          key={genres.id}
          variant="contained"
          onClick={() => {
            handleChangeSelected(id);
          }}
          color={genres.isSelected ? "primary" : "inherit"}
        >
          {genres.name}
        </Button>
      ))}
      <LanguageButton changeLanguage={changeLanguage} />
    </ListWrapper>
  );
};

export default ListGenre;
