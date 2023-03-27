import { RootState } from "store";
import { EntityId } from "@reduxjs/toolkit";
import IMovieResponseData from "./types";

export const movieState = (state: RootState) => state.movie;

export const movieId = (state: RootState) => movieState(state).ids;

export const movieEntities = (state: RootState) => movieState(state).entities;

export const selectEntitiesInArray = (state: RootState) =>
  Object.values(movieEntities(state)) as IMovieResponseData[];

export const selectMovieEntityId = (
  state: RootState,
  { movieId }: { movieId: EntityId }
) => selectEntitiesInArray(state).find((movie) => movie?.id === movieId);
