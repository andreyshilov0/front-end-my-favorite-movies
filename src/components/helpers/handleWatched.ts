import { IMovieData } from "@api/types";

export const handleChangeMovieWatched = (
  favoriteMovies: IMovieData[],
  id: number
) => (favoriteMovies[id].user_watched = !favoriteMovies[id].user_watched);
