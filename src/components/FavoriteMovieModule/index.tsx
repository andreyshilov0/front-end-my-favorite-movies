import { ModuleWrapper } from "./style";
import FavoriteMovieModuleItem from "@components/FavoriteMovieModuleItem";
import { IFavoriteMovieModule } from "./types";

const FavoriteMovieModule = ({
  userFavoriteMovies,
  deleteMovieById,
  updateMovieWatchedById
}: IFavoriteMovieModule) => {

  return (
    <ModuleWrapper>
      {userFavoriteMovies.map((movie) => (
        <FavoriteMovieModuleItem
          key={movie.id}
          updateMovieWatchedById={updateMovieWatchedById}
          deleteMovieById={deleteMovieById}
          movie={movie}
        />
      ))}
    </ModuleWrapper>
  );
};

export default FavoriteMovieModule;
