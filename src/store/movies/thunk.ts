import { createAsyncThunk } from "@reduxjs/toolkit";
import { movieApi } from "@api/tmbdAPI";

export const fetchMovies = createAsyncThunk("movies/fetchMovie", async () => {
  const responseMovie = await movieApi.getFavoriteMovies();

  return responseMovie;
});
