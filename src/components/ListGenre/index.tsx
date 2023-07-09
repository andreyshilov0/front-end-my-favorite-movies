import { useState, useCallback } from "react";
import { ListWrapper } from "./style";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import LanguageButton from "@components/LanguageButton";
import { IChangeGenres } from "./types";
import { useListGenres } from "./hooks/useListGenres";
import { useFavoriteGenres } from "./hooks/useFavoriteGenres";
import { useFavoriteGenreAdd } from "./hooks/useFavoriteGenreAdd";
import { useFavoriteGenresDelete } from "./hooks/useFavoriteGenreDelete";

const ListGenre = ({ setChangeGenresId }: IChangeGenres) => {
  const { listGenres } = useListGenres();
  const { favoriteGenres } = useFavoriteGenres();
  const { deleteGenreById } = useFavoriteGenresDelete();
  const { addGenreById } = useFavoriteGenreAdd();
  const [languageGenres, setLanguageGenres] = useState<string>("ru");
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: string): void => {
    setLanguageGenres(lang);
    i18n.changeLanguage(lang);
  };

  const favoriteGenresIds = favoriteGenres?.map((favoriteGenres) => {
    return favoriteGenres.id;
  });

  const handleButtonAction = useCallback((id: number) => {
    favoriteGenresIds?.includes(id) ? deleteGenreById(id) : addGenreById(id);
  }, []);

  return (
    <ListWrapper>
      {listGenres?.map((genres) => (
        <Button
          key={genres.id}
          variant="contained"
          onClick={() => handleButtonAction(genres.id)}
          color={favoriteGenresIds?.includes(genres.id) ? "primary" : "inherit"}
        >
          {genres.name}
        </Button>
      ))}
      <LanguageButton changeLanguage={changeLanguage} />
    </ListWrapper>
  );
};

export default ListGenre;
