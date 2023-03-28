import { createAsyncThunk } from "@reduxjs/toolkit";
import { movieApi } from "@api/tmbdAPI";
import { selectGenresInArray } from "./selectors";
import { RootState } from "store";
import { updateSelectedGenres } from ".";

export const fetchGenres = createAsyncThunk(
  "genre/getGenres",
  async (_, thunkAPI) => {
    const [genre] = await Promise.all([
      movieApi.getGenre(),
      movieApi.getFavoriteGenre(),
    ]);

    return genre.data.genres;
  }
);

export const updatedSelectedGenres = createAsyncThunk(
  "genre/updateSelectedGenres",
  async (genreId: number, thunkAPI) => {
    thunkAPI.dispatch(updateSelectedGenres(genreId));
    const selectedGenres: number[] = selectGenresInArray(
      thunkAPI.getState() as RootState
    );
    const response = await movieApi.updateSelectedGenres(selectedGenres);

    return response;
  }
);
