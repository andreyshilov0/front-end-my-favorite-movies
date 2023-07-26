import { Container, Paper, Pagination } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

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
  background-color: black;
  border-radius: 10px;
  color: white;
  margin: 5px;
  padding: 15px 10px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
`;

export const MoviesPagination = styled(Pagination)`
  display: flex;
  justify-content: center;
  margin: 25px;
`;

export const MoviePagination = styled(Pagination)`
  display: flex;
  justify-content: center;
`;
