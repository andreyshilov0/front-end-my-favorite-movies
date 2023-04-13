import { Dispatch, SetStateAction } from "react";

export interface IGenresData {
  id: number;
  name: string;
  isSelected: boolean;
}

export interface IChangeGenres {
  setChangeGenresId: Dispatch<SetStateAction<number[]>>;
}
