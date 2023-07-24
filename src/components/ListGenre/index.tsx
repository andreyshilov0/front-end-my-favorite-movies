import React, { useState, useEffect } from "react";
import { ListWrapper, LanguageWrapper } from "./style";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import LanguageButton from "@components/LanguageButton";
import { IChangeGenres } from "./types";
import { useListGenres } from "./hooks/useListGenres";
import { useFavoriteGenres } from "./hooks/useFavoriteGenres";
import { useFavoriteGenreAdd } from "./hooks/useFavoriteGenreAdd";
import { useFavoriteGenresDelete } from "./hooks/useFavoriteGenreDelete";

const ListGenre = ({ setChangeGenresId }: IChangeGenres) => {
  const [shouldRefetch, setShouldRefetch] = useState(false);
  const { listGenres } = useListGenres();
  const { favoriteGenres } = useFavoriteGenres();
  const { deleteGenreById } = useFavoriteGenresDelete(setShouldRefetch);
  const { addGenreById } = useFavoriteGenreAdd(setShouldRefetch);
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string): void => {
    i18n.changeLanguage(lang);
  };

  const favoriteGenresIds = favoriteGenres?.map((favoriteGenres) => {
    return favoriteGenres.id;
  });

  const handleButtonAction = (id: number) => {
    favoriteGenresIds?.includes(id) ? deleteGenreById(id) : addGenreById(id);
  };

  useEffect(() => {
    if (shouldRefetch) {
      setShouldRefetch(false);
    }
  }, [shouldRefetch]);


  useEffect(() => {

  }, [i18n.language]);

  return (
    <>
      <ListWrapper>
        {listGenres?.map((genres) => (
          <Button
            key={genres.id}
            variant="contained"
            onClick={() => handleButtonAction(genres.id)}
            color={
              favoriteGenresIds?.includes(genres.id) ? "primary" : "inherit"
            }
          >
            {genres.name}
          </Button>
        ))}
      </ListWrapper>
      <LanguageWrapper>
        <LanguageButton changeLanguage={changeLanguage} />
      </LanguageWrapper>
    </>
  );
};

export default ListGenre;
