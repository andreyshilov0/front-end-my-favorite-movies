export const isValidAddMoviesId = () => {
  if (localStorage.getItem("moviesId") === null) {
    localStorage.setItem("moviesId", JSON.stringify([]));
  }
};

export const addMovieId = (newMovieId: number[]) => {
  localStorage.setItem("movieId", JSON.stringify(newMovieId));
};
