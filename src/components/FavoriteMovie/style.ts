import { styled, Container, Button, Paper } from "@mui/material";
import { Link } from "react-router-dom";

export const ContainerBlock = styled(Container)`
  display: flex;
  justify-content: right;
`;

export const MainPaper = styled(Paper)`
  margin-top: 30px;
`;

export const FavoriteBlockStyle = styled(Container)`
  display: flex;
  justify-content: space-between;
`;

export const LinkButton = styled(Link)`
  background-color: gray;
  border-radius: 10px;
  color: white;
  margin: 5px;
  padding: 15px 10px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
`;
