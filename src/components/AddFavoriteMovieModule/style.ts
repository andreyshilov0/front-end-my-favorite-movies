import { Button, Card, Container, Typography } from "@mui/material";
import styled from "@emotion/styled";

export const AddFavoriteWrapperModule = styled(Container)`
  display: flex;
  margin: auto;
`;

export const AddFavoriteBodyWrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  margin: auto;
`;

export const AddModuleTitle = styled(Typography)`
  text-align: center;
  font-size: 22px;
  margin-bottom: 10px;
`;

export const ImageModuleWrapper = styled.img`
  display: flex;
  width: 180px;
  align-items: center;
  margin: auto;
`;

export const AddModuleOverview = styled.div`
  display: flex;
  overflow: auto;
  width: 300px;
  height: 100px;
  font-size: 14px;
  margin: 20px 10px;
`;

export const AddMovieButton = styled(Button)`
  width: 200px;
  height: 40px;
  margin: auto;
`;
