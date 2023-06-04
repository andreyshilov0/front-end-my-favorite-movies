import { useState, useEffect } from "react";
import { ListWrapper } from "./style";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import LanguageButton from "@components/LanguageButton";
import { IChangeGenres } from "./types";
import { useListGenres } from "./hooks/useListGenres";
import { FAVORITE_GENRES, useFavoriteGenres } from "./hooks/useFavoriteGenres";
import { useFavoriteGenreAdd } from "./hooks/useFavoriteGenreAdd";
import { useFavoriteGenresDelete } from "./hooks/useFavoriteGenreDelete";

const ListGenre = ({ setChangeGenresId }: IChangeGenres) => {
  const { listGenres } = useListGenres();
  const { favoriteGenres } = useFavoriteGenres();
  const [addGenreById, { }] = useFavoriteGenreAdd();
  const [deleteGenreById, { }] = useFavoriteGenresDelete();
  const [languageGenres, setLanguageGenres] = useState<string>("ru");
  const [favoriteGenresId, setFavoriteGenresId] = useState<number[]>([]);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: string): void => {
    setLanguageGenres(lang);
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    favoriteGenres &&
      favoriteGenres.map((favoriteGenres) => {
        setFavoriteGenresId(favoriteGenres.id);
      });
  }, [FAVORITE_GENRES]);

  return (
    <ListWrapper>
      {listGenres &&
        listGenres.map((genres) => (
          <Button
            key={genres.id}
            variant="contained"
            onClick={() => {
              favoriteGenresId.includes(genres.id)
                ? deleteGenreById(genres.id)
                : addGenreById(genres.id);
            }}
            color={favoriteGenresId.includes(genres.id) ? "primary" : "inherit"}
          >
            {genres.name}
          </Button>
        ))}
      <LanguageButton changeLanguage={changeLanguage} />
    </ListWrapper>
  );
};

export default ListGenre;
