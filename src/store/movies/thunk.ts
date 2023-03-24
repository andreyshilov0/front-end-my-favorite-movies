import { createAsyncThunk } from "@reduxjs/toolkit";
import { movieApi } from "@api/tmbdAPI";

export const fetchMovies = createAsyncThunk("movies/fetchMovie", async () => {
  const responseMovie = await Promise.all([movieApi.getFavoriteMovies()]);

  return responseMovie;
});
