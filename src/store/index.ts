import { configureStore } from "@reduxjs/toolkit";
import { genreSlice } from "./genres";

export const store = configureStore({
  reducer: {
    genre: genreSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
