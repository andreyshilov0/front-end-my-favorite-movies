import { Card, Typography } from "@mui/material";
import styled from "@emotion/styled";

export const WrapperModule = styled(Card)`
  min-width: 280px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModuleTitle = styled(Typography)`
  text-align: center;
  font-size: 22px;
  margin-bottom: 10px;
  word-wrap: break-word;
  max-width: 200px; 
`;

export const ImageModuleWrapper = styled.img`
  display: flex;
  margin: auto;
  width: 180px;
  align-items: center;
`;

export const ModuleOverview = styled.div`
  overflow: auto;
  width: 300px;
  max-height: 100px; 
  font-size: 14px;
  margin: 20px 10px;
`;
