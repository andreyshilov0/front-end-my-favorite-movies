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
import { useMutation } from "@apollo/client";
import { FAVORITE_GENRE_ADD } from "./hooks/useFavoriteGenreAdd";
import { FAVORITE_GENRE_DELETE } from "./hooks/useFavoriteGenreDelete";

const ListGenre = ({ setChangeGenresId }: IChangeGenres) => {
  const { loading, error, listGenres } = useListGenres();
  const { favoriteGenres } = useFavoriteGenres();
  const [favoriteGenreAdd, { data }] = useMutation(FAVORITE_GENRE_ADD, {
    refetchQueries: [FAVORITE_GENRES],
  });
  const [favoriteGenreDelete, { }] = useMutation(FAVORITE_GENRE_DELETE, {
    refetchQueries: [FAVORITE_GENRES],
  });
  const [genres, setGenres] = useState<IGenresData[]>([]);
  const [languageGenres, setLanguageGenres] = useState<string>("ru");
  const [favoriteGenresId, setFavoriteGenresId] = useState<number[]>([]);
  const { t, i18n } = useTranslation();

  const addGenreById = (genreId: number) => {
    favoriteGenreAdd({
      variables: {
        id: genreId,
      },
    });
  };

  const deleteGenreById = (genreId: number) => {
    favoriteGenreDelete({
      variables: {
        id: genreId,
      },
    });
  };

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

  const changeLanguage = (lang: string): void => {
    setLanguageGenres(lang);
    i18n.changeLanguage(lang);
  };

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

  useEffect(() => {
    favoriteGenres && favoriteGenres.map((favoriteGenres: any, id: any) => {
      // const allFavoriteGenresId = favoriteGenres.id;
      setFavoriteGenresId(favoriteGenres.id);
    });
  }, [FAVORITE_GENRES]);

  return (
    <ListWrapper>
      {listGenres && listGenres.map((genres: any, id: any) => (
        <Button
          key={genres.id}
          variant="contained"
          onClick={() => {
            favoriteGenresId.includes(id)
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
