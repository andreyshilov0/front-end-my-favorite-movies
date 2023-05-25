import { useState, useEffect } from "react";
import { ListWrapper } from "./style";
import { getGenres } from "@api/tmbdAPI";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import LanguageButton from "@components/LanguageButton";
import { IChangeGenres, IGenresData } from "./types";
import {
  handleChangeSelectedIdGenres,
  setAllGengresToLocalStorage,
  setFavoriteGenresItem,
} from "@components/helpers/ChangeSelected";
import { isValidAddMoviesId } from "@components/helpers/isValidAddMoviesId";
import { gql, useQuery } from "@apollo/client";
import client from "apollo/client";
import { useListGenres } from "./hooks/useListGenres";


const ListGenre = ({ setChangeGenresId }: IChangeGenres) => {
  const [genres, setGenres] = useState<IGenresData[]>([]);
  const [languageGenres, setLanguageGenres] = useState<string>("ru");
  const [genresId, setGenresId] = useState<number[]>([]);
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
  useEffect(() => {
    setChangeGenresId(genresId);
  }, [genresId]);
  isValidAddMoviesId();
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

  useEffect(() => {
    setGenresId(
      genres
        .filter((_, index) => {
          return genres[index].isSelected;
        })
        .map((genreInfo) => {
          return genreInfo.id;
        })
    );
    setFavoriteGenresItem(genresId);
  }, [genres]);

  // const { loading, error, data } = useListGenres()
  // console.log(data)

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
