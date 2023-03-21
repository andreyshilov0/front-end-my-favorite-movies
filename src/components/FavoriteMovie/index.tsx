import React from "react";
import { ContainerBlock, ButtonBlock, MainPaper, FavoriteBlock } from "./style";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import { useNavigate } from "react-router-dom";

const FavoriteMovie = () => {
  const navigate = useNavigate();

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
          <ToggleButtonGroup orientation="horizontal" exclusive>
            <ToggleButton value="list" aria-label="list">
              <ViewListIcon />
            </ToggleButton>
            <ToggleButton value="module" aria-label="module">
              <ViewModuleIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </ContainerBlock>
        <FavoriteBlock>This Movie List and Block</FavoriteBlock>
      </MainPaper>
    </>
  );
};

export default FavoriteMovie;
