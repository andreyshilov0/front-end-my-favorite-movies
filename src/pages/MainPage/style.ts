import { Paper, Container, styled } from "@mui/material";

export const WrapperGenre = styled(Paper)`
  display: flex;
  flex-direction: column;
  margin: 50px 100px;
  font-size: 25px;
  padding: 50px;
`;

export const WrapperMovie = styled(Container)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  row-gap: 10px;
  font-size: 25px;
`;
