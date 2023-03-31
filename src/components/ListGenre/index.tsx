import { useState, useEffect } from "react";
import { ListWrapper } from "./style";
import { getGenres } from "@api/tmbdAPI";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import LanguageButton from "@components/LanguageButton";

const ListGenre = () => {
  const [genres, setGenres] = useState<any[]>([]);
  const [languageGenres, setLanguageGenres] = useState<string>("ru");
  const favoriteGenres = [JSON.parse(localStorage["allGenres"])];

  const { t, i18n } = useTranslation();

  const getGenresData = (language: string) => {
    getGenres(language).then((res) => {
      setGenres(
        res.map((genres) => ({
          id: genres.id,
          isSelected: false,
          name: genres.name,
        }))
      );
    });
  };

  const handleChangeSelected = (id: number) => {
    genres[id].isSelected = !genres[id].isSelected;

    setGenres([...genres]);
    localStorage.setItem("allGenres", JSON.stringify(genres));
    localStorage.setItem("backend_data_favorite_genres", JSON.stringify([id]));
  };

  useEffect(() => {
    getGenresData("en");
  }, []);

  const changeLanguage = (lang: string): void => {
    setLanguageGenres(lang);
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    getGenresData(languageGenres);
  }, [languageGenres]);

  return (
    <>
      <LanguageButton changeLanguage={changeLanguage} />
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
      </ListWrapper>
    </>
  );
};

export default ListGenre;
