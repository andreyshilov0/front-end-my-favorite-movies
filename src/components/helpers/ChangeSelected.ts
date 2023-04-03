import { IGenresData } from "@components/ListGenre/types";

export const handleChangeSelectedIdGenres = (id: number) => {
  localStorage.setItem("backend_data_favorite_genres", JSON.stringify(id));
};

export const setAllGengresToLocalStorage = (genres: IGenresData[]) => {
  localStorage.setItem("allGenres", JSON.stringify(genres));
};
