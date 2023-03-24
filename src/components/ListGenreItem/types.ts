import { EntityId } from "@reduxjs/toolkit";

export interface IListGenreItem {
  id: EntityId | number;
  changeButton: boolean;
}
