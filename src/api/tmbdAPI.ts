import axios from "axios";
import { IGenreDataRequest } from "store/genres/types";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: process.env.MOVIE_API_KEY,
    language: "ru",
  },
});

export const movieApi = {
  getOnceFilms() {
    return instance.get("movie/550");
  },
  getGenre() {
    return instance.get<IGenreDataRequest>("genre/movie/list");
  },
};
