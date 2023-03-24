import { createAsyncThunk } from "@reduxjs/toolkit";
import { movieApi } from "@api/tmbdAPI";
import { genreSlice } from ".";
import { selectGenresInArray } from "./selectors";
import { RootState } from "store";

export const fetchGenres = createAsyncThunk(
  "genre/fetchGenres",
  async (_, thunkAPI) => {
    const [responseGenre, responseFavoriteGenre] = await Promise.all([
      movieApi.getGenre(),
      movieApi.getFavoriteGenre(),
    ]);

    thunkAPI.dispatch(genreSlice.actions.setGenres(responseFavoriteGenre));
    return responseGenre.data.genres;
  }
);

export const updateSelectedGenres = createAsyncThunk(
  "genre/updateSelectedGenres",
  async (genreId: number, thunkAPI) => {
    thunkAPI.dispatch(genreSlice.actions.updateSelectedGenres(genreId));
    const selectedGenres: number[] = selectGenresInArray(
      thunkAPI.getState() as RootState
    );
    const response = await movieApi.updateSelectedGenres(selectedGenres);

    return response;
  }
);
