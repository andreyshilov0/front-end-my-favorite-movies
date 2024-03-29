import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";

export const LinkButton = styled(Link)`
  display: flex;
  justify-content: center;
  max-width: 200px;
  background-color: black;
  border-radius: 15px;
  color: white;
  margin: 30px 35px;
  padding: 5px;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
`;

export const SelectorWrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  margin: 15px;
  height: 100px;
`;

export const InputWrapper = styled.input`
  width: 200px;
`;

export const SelectWrapper = styled.select`
  margin: 15px;
  border-radius: 5px;
  width: 70px;
  font-size: 15px;
`;

export const WrapperMovie = styled(Container)`
  display: flex;
`;

export const WrapperButtonView = styled.div`
  display: flex;
  justify-content: left;
  margin: 0px 40px;
`;
