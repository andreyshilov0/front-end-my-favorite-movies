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
      favoriteGenres.map((favoriteGenres: any, id: any) => {
        setFavoriteGenresId(favoriteGenres.id);
      });
  }, [FAVORITE_GENRES]);

  return (
    <ListWrapper>
      {listGenres &&
        listGenres.map((genres: any, id: any) => (
          <Button
            key={genres.id}
            variant="contained"
            onClick={() => {
              favoriteGenresId.includes(genres.id)
                ? deleteGenreById(genres.id)
                : addGenreById(id);
            }}
            color={favoriteGenresId.includes(id) ? "primary" : "inherit"}
          >
            {genres.name}
          </Button>
        ))}
      <LanguageButton changeLanguage={changeLanguage} />
    </ListWrapper>
  );
};

export default ListGenre;

// const getGenresData = (language: string) => {
//   getGenres(language).then((res) => {
//     if (res)
//       setGenres(
//         res.map((genres) => ({
//           id: genres.id,
//           name: genres.name,
//           isSelected: false,
//         }))
//       );
//   });
// };
// useEffect(() => {
//   setChangeGenresId(genresId);
// }, [genresId]);
// isValidAddMoviesId();
// const handleChangeSelected = (id: number) => {
//   genres[id].isSelected = !genres[id].isSelected;

//   setGenres([...genres]);
//   setAllGengresToLocalStorage(genres);
//   handleChangeSelectedIdGenres(id);
// };

// useEffect(() => {
//   getGenresData(languageGenres);
// }, [languageGenres]);

// useEffect(() => {
//   setGenresId(
//     genres
//       .filter((_, index) => {
//         return genres[index].isSelected;
//       })
//       .map((genreInfo) => {
//         return genreInfo.id;
//       })
//   );
//   setFavoriteGenresItem(genresId);
// }, [genres]);
