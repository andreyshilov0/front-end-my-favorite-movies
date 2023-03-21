import { useEffect } from "react";
import ListGenreItem from "@components/ListGenreItem";
import { ListWrapper } from "./style";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { fetchGenres } from "store/genres/thunk";

const ListGenre = () => {
  return (
    <>
      <ListWrapper>
        <ListGenreItem />
      </ListWrapper>
    </>
  );
};

export default ListGenre;
