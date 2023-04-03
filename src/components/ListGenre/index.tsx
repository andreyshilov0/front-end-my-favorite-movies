import { useState, useEffect } from "react";
import { ListWrapper } from "./style";
import { getGenres } from "@api/tmbdAPI";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import LanguageButton from "@components/LanguageButton";
import { IGenresData } from "./types";
import {
  isChangeSelectedIdGenres,
  isChangeGenres,
} from "@components/helpers/isChangeSelected";

const ListGenre = () => {
  const [genres, setGenres] = useState<IGenresData[]>([]);
  const [languageGenres, setLanguageGenres] = useState<string>("ru");

  const { t, i18n } = useTranslation();

  const getGenresData = (language: string) => {
    getGenres(language).then((res) => {
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
    isChangeGenres(genres);
    isChangeSelectedIdGenres(id);
  };

  const changeLanguage = (lang: string): void => {
    setLanguageGenres(lang);
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    getGenresData("");
  }, []);

  useEffect(() => {
    getGenresData(languageGenres);
  }, [languageGenres]);

  return (
    <ListWrapper>
      {genres.map((genres, id) => (
        <Button
          key={id}
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
