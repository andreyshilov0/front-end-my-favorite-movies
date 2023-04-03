import { Container, Button } from "@mui/material";
import styled from "@emotion/styled";

export const NavContainer = styled(Container)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  font-size: 25px;
`;

export const NavHeader = styled.header`
  background-color: black;
  box-shadow: 10px black;
  margin: 15px 0;
  color: white;
`;

export const NavWrapper = styled.div`
  display: flex;
  column-gap: 50px;
`;

export const LanguageButtonNav = styled(Button)`
  display: flex;
  width: 50px;
  background-color: white;
`;
