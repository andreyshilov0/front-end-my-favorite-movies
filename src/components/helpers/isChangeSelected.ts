import { IGenresData } from "@components/ListGenre/types";

export const isChangeSelectedIdGenres = (id: number) => {
  localStorage.setItem("backend_data_favorite_genres", JSON.stringify(id));
};

export const isChangeGenres = (genres: IGenresData[]) => {
  localStorage.setItem("allGenres", JSON.stringify(genres));
};
