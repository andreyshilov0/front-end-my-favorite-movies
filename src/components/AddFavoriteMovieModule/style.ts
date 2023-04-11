import { Button, Card, Container, Typography } from "@mui/material";
import styled from "@emotion/styled";

export const AddFavoriteWrapperModule = styled(Card)`
  display: flex;
  flex-wrap: wrap;
`;

export const AddFavoriteBodyWrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  margin: auto;
`;

export const AddFavoriteWrapContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const AddModuleTitle = styled(Typography)`
  font-size: 22px;
  margin-bottom: 10px;
`;

export const ImageModuleWrapper = styled.img`
  display: flex;
  width: 180px;
  align-items: center;
`;

export const AddModuleOverview = styled.div`
  display: flex;
  overflow: auto;
  width: 280px;
  height: 100px;
  font-size: 14px;
  margin: 20px 10px;
`;

export const AddMovieButton = styled(Button)`
  width: 200px;
  height: 40px;
  margin-bottom: 20px;
`;
