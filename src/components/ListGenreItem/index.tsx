import { useAppSelector } from "store/hooks";
import { ListItems } from "./style";
import { useAppDispatch } from "store/hooks";
import { updateSelectedGenres } from "store/genres/thunk";
import { selectGenreId } from "store/genres/selectors";
import { IListGenreItem } from "./types";

const ListGenreItem = ({ id, changeButton }: IListGenreItem) => {
  const genreEntities = useAppSelector((state) =>
    selectGenreId(state, { genreId: id })
  );
  const dispatch = useAppDispatch();

  return (
    <>
      <ListItems
        onClick={() => dispatch(updateSelectedGenres(id as number))}
        variant={changeButton ? "contained" : "outlined"}
      >
        {genreEntities?.name}
      </ListItems>
    </>
  );
};

export default ListGenreItem;
