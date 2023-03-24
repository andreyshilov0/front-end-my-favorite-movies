import { RootState } from "store";
import { EntityId } from "@reduxjs/toolkit";

export const genreState = (state: RootState) => state.genres;
export const genreId = (state: RootState) => genreState(state).ids;
export const genreEntities = (state: RootState) => genreState(state).entities;
export const selectEntitiesInArray = (state: RootState) =>
  Object.values(genreEntities(state));
export const selectGenreId = (
  state: RootState,
  { genreId }: { genreId: EntityId }
) => selectEntitiesInArray(state).find((genre) => genre?.id === genreId);
export const selectGenresInArray = (state: RootState): number[] =>
  genreState(state).selectedGenres;
