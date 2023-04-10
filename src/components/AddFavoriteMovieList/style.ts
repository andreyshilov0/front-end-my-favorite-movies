import styled from "@emotion/styled";
import { Container, Button, Paper } from "@mui/material";

export const AddMovieListWrapper = styled(Container)`
  display: flex;
  flex-direction: column;
`;

export const ImageWrapper = styled.img`
  width: 150px;
  height: 100px;
  margin: 1px 15px;
`;

export const AddMovieButton = styled(Button)`
  width: 180px;
  height: 55px;
  margin: 10px;
`;

export const MovieWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 16px;
`;
export const AddFavoriteMoviePaper = styled(Paper)`
  margin-top: 30px;
`;
