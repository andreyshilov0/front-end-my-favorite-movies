import React from "react";
import { movieApi } from "@api/tmbdAPI";
import { backendData } from "localDate/data-backend";
import { Button } from "@mui/material";

const ListGenre = () => {
  return (
    <>
      {backendData.favoriteGenres.map(() => (
        <li>
          <Button></Button>
        </li>
      ))}
    </>
  );
};

export default ListGenre;
