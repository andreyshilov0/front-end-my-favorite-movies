import { createSlice } from "@reduxjs/toolkit";
import { fetchGenres } from "./thunk";
import { IGenreState } from "./types";
import { LoadingStatus } from "store/types";

const initialState: IGenreState = {
  id: 0,
  name: "name",
  selectedGenres: [],
  status: LoadingStatus.idle,
};

export const genreSlice = createSlice({
  name: "genre",
  initialState,
  reducers: {
    selectedGenres(state, action) {
      state.selectedGenres = action.payload;
    },
    updateSelectedGenres(state: any, action) {
      if (state.selectedGenres.includes(action.payload)) {
        state.selectedGenres = state.selectedGenres.filter(
          (item: any) => item !== action.payload
        );
      } else {
        state.selectedGenres.push(action.payload);
      }
    },
  },
  extraReducers: {
    [fetchGenres.fulfilled.type]: (state, action) => {
      state.status = LoadingStatus.success;
      state.selectedGenres = action.payload;
    },
    [fetchGenres.pending.type]: (state) => {
      state.status = LoadingStatus.inProgress;
    },
    [fetchGenres.rejected.type]: (state) => {
      state.status = LoadingStatus.failed;
    },
  },
});

export default genreSlice.reducer;
