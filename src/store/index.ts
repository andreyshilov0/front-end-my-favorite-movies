import { configureStore } from "@reduxjs/toolkit";
import { genreSlice } from "./genres";
import { moviesSlice } from "./movies";

export const store = configureStore({
  reducer: {
    genres: genreSlice.reducer,
    movie: moviesSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
