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
): Promise<Array<IGenreData> | undefined> => {
  try {
    const genres = await instance.get(`genre/movie/list`, {
      params: { language: `${language}-${language}` },
    });

    return genres.data.genres;
  } catch (error) {
    console.error(error);
  }
};

export const getDataMovieById = async (
  id: number
): Promise<IMovieData[] | undefined> => {
  try {
    const res = await instance.get(`movie/${id}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const getFavoriteMovie = () => {
  try {
    const favoriteMovie = JSON.parse(
      localStorage["backend_data_favorite_movies"]
    );

    return favoriteMovie;
  } catch (error) {
    console.error(error);
  }
};
