import axios from "axios";
import { IGenreData, IMovieData, IMovieDataReponse } from "./types";
import { LIST_LANGUAGES } from "./constants";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: process.env.REACT_APP_API_KEY,
    language: `${LIST_LANGUAGES}`,
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

export const getFavoriteMovies = (): IMovieData[] | undefined => {
  try {
    const favoriteMovie = JSON.parse(
      localStorage["backend_data_favorite_movies"]
    );

    return favoriteMovie;
  } catch (error) {
    console.error(error);
  }
};

export const getFavoriteMovieById = (): number[] | undefined => {
  try {
    const movieId = JSON.parse(localStorage["moviesId"]);

    return movieId;
  } catch (error) {
    console.error(error);
  }
};

export const getDataMovies = async (
  year: number,
  page: number,
  genresId: number[],
  range: number
): Promise<Array<IMovieDataReponse> | undefined> => {
  try {
    const res = await instance.get(`discover/movie`, {
      params: {
        language: `${LIST_LANGUAGES}`,
        sort_by: "popularity.desc",
        include_adult: false,
        include_video: false,
        page: `${page}`,
        with_genres: ` ${genresId}`,
        year: `${year}`,
        with_watch_monetization_types: "flatrate",
        vote_avarege_lte: `${range}`,
      },
    });
    return res.data.results;
  } catch (error) {
    console.error(error);
  }
};
