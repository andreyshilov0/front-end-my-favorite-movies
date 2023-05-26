import { ApolloError } from "@apollo/client";

export interface IAddFavoriteMovie {
  currentYear: number;
  currentGenreIds: number[];
  range: number;
  blockView: boolean;
}

