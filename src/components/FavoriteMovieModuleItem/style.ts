import { Card, Typography } from "@mui/material";
import styled from "@emotion/styled";

export const WrapperModule = styled(Card)`
  min-width: 280px;
`;

export const ModuleTitle = styled(Typography)`
  text-align: center;
  font-size: 22px;
  margin-bottom: 10px;
`;

export const ImageModuleWrapper = styled.img`
  display: flex;
  margin: auto;
  width: 180px;
  align-items: center;
`;

export const ModuleOverview = styled.div`
  display: flex;
  overflow: auto;
  width: 300px;
  height: 100px;
  font-size: 14px;
  margin: 20px 10px;
`;
