import axios from "axios";
import IMovieResponseData from "store/movies/types";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: process.env.REACT_APP_API_KEY,
    language: "ru",
  },
});

export const movieApi = {
  getGenre() {
    return instance.get("genre/movie/list");
  },

  getFavoriteGenre() {
    return new Promise<number[]>((res) => {
      const favoriteGenres: number[] = JSON.parse(
        localStorage.getItem("backend_data_favorite_genres") as string
      );
      res(favoriteGenres);
    });
  },
  updateSelectedGenres(selectedGenres: number[]) {
    return new Promise<number[]>((resolve) => {
      localStorage.setItem(
        "backend_data_favorite_genres",
        JSON.stringify({
          favoriteGenres: [...selectedGenres],
        })
      );
      resolve(selectedGenres);
    });
  },
  getFavoriteMovies() {
    return new Promise<IMovieResponseData>((resolve) => {
      const favoriteMovies = JSON.parse(
        localStorage.getItem("backend_data_favorite_movies") as string
      );

      resolve(favoriteMovies);
    });
  },
  deleteMovie(movieId: number) {
    return new Promise<IMovieResponseData>((resolve) => {
      const localData = JSON.parse(
        localStorage.getItem("backend_data_favorite_movies") as string
      );
      const result = localData.filter(
        (item: IMovieResponseData) => item?.id !== movieId
      );

      localStorage.setItem(
        "backend_data_favorite_movies",
        JSON.stringify(result)
      );

      resolve(result);
    });
  },
};
