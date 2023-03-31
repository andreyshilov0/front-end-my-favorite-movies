import axios from "axios";
import { IGenreData, IMovieData } from "./types";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: process.env.REACT_APP_API_KEY,
    language: `[ru, en]`,
  },
});

export const getGenres = async (
  language: string
): Promise<Array<IGenreData>> => {
  const genres = await instance.get(`genre/movie/list`, {
    params: { language: `${language}-${language}` },
  });

  return genres.data.genres;
};

export const getDataMovieById = async (id: number): Promise<Object> => {
  const res = await instance.get(`movie/${id}`);

  return res.data;
};

export const getFavoriteMovie = async (): Promise<IMovieData[]> => {
  const favoriteMovie = JSON.parse(
    localStorage.getItem("backend_data_favorite_movies") as string
  );

  return favoriteMovie.data;
};
