import { useEffect } from "react";
import { useAppSelector } from "store/hooks";
import { ListItems } from "./style";
import { useAppDispatch } from "store/hooks";
import { fetchGenres } from "store/genres/thunk";

const ListGenreItem = () => {
  const { selectedGenres } = useAppSelector((state) => state.genre);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchGenres());
  }, []);
  return (
    <>
      {Object.entries(selectedGenres).map((res, id) => {
        return (
          <ListItems key={id} value={res[0]}>
            {res[0]}
          </ListItems>
        );
      })}
    </>
  );
};

export default ListGenreItem;
