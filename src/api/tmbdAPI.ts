import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: process.env.MOVIE_API_KEY,
    language: "ru",
  },
});

export const movieApi = {
  getGenre() {
    return axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=b99fe320109a94711294442871bc1553&language=en-US`
    );
  },

  getFavoriteGenre() {
    return new Promise((res) => {
      const { favoriteGenres } = JSON.parse(
        localStorage.getItem("backend-data") as string
      );
      res(favoriteGenres);
    });
  },
  updateSelectedGenres(selectedGenres: number[]) {
    return new Promise((resolve) => {
      const result: any = JSON.parse(
        localStorage.getItem("backend-data") as string
      );
      localStorage.setItem(
        "backend-data",
        JSON.stringify({
          favoriteMovies: [...result.favoriteMovies],
          favoriteGenres: [...selectedGenres],
        })
      );
      resolve(selectedGenres);
    });
  },
};
