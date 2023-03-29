import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { fetchGenres } from "./thunk";
import { IGenreData, IGenreState } from "./types";
import { loadingStatus } from "store/types";

const entityAdapter = createEntityAdapter<IGenreData>();

export const genreSlice = createSlice({
  name: "genres",
  initialState: entityAdapter.getInitialState<IGenreState>({
    selectedGenres: [],
    status: loadingStatus.idle,
  }),
  reducers: {
    setGenres(state, action) {
      state.selectedGenres = action.payload;
    },
    updateSelectedGenres(state, action: PayloadAction<number>) {
      if (state.selectedGenres.includes(action.payload)) {
        state.selectedGenres = state.selectedGenres.filter(
          (id) => id !== action.payload
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
      .addCase(fetchGenres.fulfilled, (state, action) => {
        entityAdapter.setAll(state, action.payload);
        state.status = loadingStatus.success;
      })
      .addCase(fetchGenres.rejected, (state) => {
        state.status = loadingStatus.failed;
      }),
});

export const { setGenres, updateSelectedGenres } = genreSlice.actions;

export default genreSlice.reducer;
