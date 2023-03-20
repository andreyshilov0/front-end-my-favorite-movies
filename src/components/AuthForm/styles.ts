import styled from "@emotion/styled";
import { Paper, TextField, Button } from "@mui/material";

export const AuthTextField = styled(TextField)`
  width: 300px;
`;

export const AuthPaper = styled(Paper)`
  display: flex;
  flex-direction: column;
  padding: 20px;
  row-gap: 15px;
`;

export const AuthButton = styled(Button)`
  display: flex;
  width: 100px;
  background-color: black;
`;
