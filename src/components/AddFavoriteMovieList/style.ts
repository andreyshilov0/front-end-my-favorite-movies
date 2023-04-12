import styled from "@emotion/styled";
import { Container, Button, Paper, Card, Typography } from "@mui/material";
import ButtonView from "@components/ButtonView";

export const AddMovieListWrapper = styled(Container)`
  display: flex;
  flex-direction: column;
`;

export const ImageWrapper = styled.img`
  width: ${(ButtonView) => (ButtonView.width ? "150px" : "250px ")};
  height: 100px;
  margin: 1px 15px;
`;

export const AddMovieButtonList = styled(Button)`
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
