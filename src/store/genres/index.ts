import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchGenres } from "./thunk";
import { IGenreState } from "./types";
import { loadingStatus } from "store/types";

const initialState: IGenreState = {
  id: [],
  selectedGenres: [],
  status: loadingStatus.idle,
};

export const genreSlice = createSlice({
  name: "genre",
  initialState,
  reducers: {
    selectedGenres(state, action) {
      state.selectedGenres = action.payload;
    },
    updateSelectedGenres(state: any, action: PayloadAction<number[]>) {
      if (state.selectedGenres.includes(action.payload)) {
        state.selectedGenres = state.selectedGenres.filter(
          (item: any) => item !== action.payload
        );
      } else {
        state.selectedGenres.push(action.payload);
      }
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchGenres.pending, (state) => {
        state.status = loadingStatus.inProgress;
      })
      .addCase(fetchGenres.fulfilled, (state, action: any) => {
        state.status = loadingStatus.success;
        state.selectedGenres = action.payload;
      })
      .addCase(fetchGenres.rejected, (state) => {
        state.status = loadingStatus.failed;
      }),
});

export default genreSlice.reducer;
