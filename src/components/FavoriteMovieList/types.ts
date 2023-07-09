export interface IFavoriteMovieList {
  deleteMovieById: (id: number) => void;
  userFavoriteMovies: Array<IMovieData>;
  updateMovieWatchedById: (id: number) => Promise<void>;
}

export interface IMovieData {
  id: number;
  description: string;
  imageUrl: string;
  year: number;
  title: string;
  watched: boolean;
}
