export const isValidAddMoviesId = () => {
  if (localStorage.getItem("movieId") === null) {
    localStorage.setItem("movieId", JSON.stringify([]));
  }
};

export const addMovieId = (newMovieId: number[]) => {
  localStorage.setItem("movieId", JSON.stringify(newMovieId));
};

export const parseMovieId = () => JSON.parse(localStorage["movieId"]);
