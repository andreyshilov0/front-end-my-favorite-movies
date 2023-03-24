import { useEffect } from "react";
import ListGenreItem from "@components/ListGenreItem";
import { ListWrapper } from "./style";
import { useAppDispatch } from "store/hooks";
import { genreId, selectGenresInArray } from "store/genres/selectors";
import { fetchGenres } from "store/genres/thunk";
import { useAppSelector } from "store/hooks";

const ListGenre = () => {
  const dispatch = useAppDispatch();

  const setGenreId = useAppSelector(genreId);
  const setGenres = useAppSelector(selectGenresInArray);

  useEffect(() => {
    dispatch(fetchGenres());
  }, []);

  return (
    <>
      <ListWrapper>
        {setGenreId.map((id) => (
          <ListGenreItem
            key={id}
            id={id}
            changeButton={setGenres.includes(id as number)}
          />
        ))}
      </ListWrapper>
    </>
  );
};

export default ListGenre;
