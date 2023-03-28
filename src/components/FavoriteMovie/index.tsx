import React, { useEffect } from "react";
import {
  ContainerBlock,
  ButtonBlock,
  MainPaper,
  FavoriteBlockStyle,
} from "./style";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { fetchMovies } from "store/movies/thunk";
import FavoriteMovieList from "@components/FavoriteMovieList";
import { selectEntitiesInArray } from "store/movies/selectors";
import { useTranslation } from "react-i18next";

const FavoriteMovie = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [view, setView] = React.useState("list");
  const movieData = useAppSelector(selectEntitiesInArray);

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    nextView: string
  ) => {
    setView(nextView);
  };
  const { t } = useTranslation("main-page");
  return (
    <>
      <MainPaper>
        {t("FavoriteFilms.titleName")}
        <ContainerBlock>
          <ButtonBlock
            variant="contained"
            onClick={() => {
              navigate("/add-favorite");
            }}
          >
            {t("FavoriteFilms.buttonAddFilms")}
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
        <FavoriteBlockStyle>
          <FavoriteMovieList movieData={movieData} />
        </FavoriteBlockStyle>
      </MainPaper>
    </>
  );
};

export default FavoriteMovie;
