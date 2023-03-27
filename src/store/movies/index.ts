import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { loadingStatus } from "store/types";
import { fetchMovies } from "./thunk";
import { PayloadAction } from "@reduxjs/toolkit";
import IMovieResponseData from "./types";

const entityMovieAdapter = createEntityAdapter<IMovieResponseData>();

export const moviesSlice = createSlice({
  name: "movies",
  initialState: entityMovieAdapter.getInitialState({
    status: loadingStatus.idle,
  }),
  reducers: {
    setMovie(state, action: PayloadAction<any>) {
      entityMovieAdapter.setMany(state, action.payload);
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = loadingStatus.inProgress;
      })
      .addCase(fetchMovies.fulfilled, (state: any, action: any) => {
        entityMovieAdapter.addMany(state, action.payload);
        state.status = loadingStatus.success;
      })
      .addCase(fetchMovies.rejected, (state) => {
        state.status = loadingStatus.failed;
      }),
});

export const { setMovie } = moviesSlice.actions;

export default moviesSlice.reducer;
