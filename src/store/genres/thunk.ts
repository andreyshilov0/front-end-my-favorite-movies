import { createAsyncThunk } from "@reduxjs/toolkit";
import { movieApi } from "@api/tmbdAPI";

export const fetchGenres = createAsyncThunk(
  "genre/fetchGenres",
  async (_, thunkAPI) => {
    const response = await movieApi.getGenre();
    console.log(response.data.genres);
    return response.data.genres;
  }
);
