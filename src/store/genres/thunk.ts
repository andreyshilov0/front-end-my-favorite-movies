import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchGenres = createAsyncThunk(
  "genre/fetchGenres",
  async (_, thunk) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=b99fe320109a94711294442871bc1553&language=en-US`
    );
    return response.data;
  }
);
