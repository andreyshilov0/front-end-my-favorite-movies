import { createAsyncThunk } from "@reduxjs/toolkit";
import { movieApi } from "@api/tmbdAPI";
import { moviesSlice } from ".";
import { selectMovieEntityId } from "./selectors";

export const fetchMovies = createAsyncThunk("movies/fetchMovie", async () => {
  const responseMovie = await movieApi.getFavoriteMovies();

  return responseMovie;
});

export const deleteMovie = createAsyncThunk(
  "movie/updateMovie",
  async (movieId, thunkAPI) => {
    thunkAPI.dispatch(moviesSlice.actions.deleteMovie(movieId));
    const selectedMovieId: any = selectMovieEntityId;

    const response = await movieApi.deleteMovie(selectedMovieId);
    return response;
  }
);
