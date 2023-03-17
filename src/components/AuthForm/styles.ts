import styled from "@emotion/styled";
import {  Paper, TextField } from "@mui/material";

export const CustomTextField = styled(TextField)`
  width: 300px;
`;

export const CustomPaper = styled(Paper)`
  display: flex;
  flex-direction: column;
  padding: 20px;
  row-gap: 15px;
  Button{
    display:flex;
  width: 100px;
  background-color: black;
  }
`;


