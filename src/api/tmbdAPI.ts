import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: process.env.MOVIE_API_KEY,
    language: "ru",
  },
});

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

export const movieApi = {
  getOnceFilms() {
    return instance.get("movie/550");
  },
  getGenre() {
    return instance.get("genre/movie/list");
  },
  getFavoriteGenre() {
    return;
    const { favoriteGenres } = JSON.parse(
      localStorage.getItem("data-backend") as string
    );
  },
};
