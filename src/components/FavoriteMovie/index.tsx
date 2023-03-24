import React, { useEffect } from "react";
import { ContainerBlock, ButtonBlock, MainPaper, FavoriteBlock } from "./style";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { fetchMovies } from "store/movies/thunk";
import FavoriteMovieList from "@components/FavoriteMovieList";

const FavoriteMovie = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [view, setView] = React.useState("list");

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    nextView: string
  ) => {
    setView(nextView);
  };
  return (
    <>
      <MainPaper>
        Ваши избранные фильмы
        <ContainerBlock>
          <ButtonBlock
            variant="contained"
            onClick={() => {
              navigate("/add-favorite");
            }}
          >
            Добавить
          </ButtonBlock>
          <ToggleButtonGroup
            orientation="horizontal"
            value={view}
            exclusive
            onChange={handleChange}
          >
            <ToggleButton value="list" aria-label="list">
              <ViewListIcon />
            </ToggleButton>
            <ToggleButton value="module" aria-label="module">
              <ViewModuleIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </ContainerBlock>
        <FavoriteBlock>
          <FavoriteMovieList />
        </FavoriteBlock>
      </MainPaper>
    </>
  );
};

export default FavoriteMovie;
