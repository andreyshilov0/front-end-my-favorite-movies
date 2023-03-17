import { Container, styled } from "@mui/material";

export const CustomContainer = styled(Container)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  font-size: 25px;
`;

export const CustomHeader = styled("header")(({ theme }) => ({
  backgroundColor: 'black',
  boxShadow: theme.shadows[20],
  margin: "15px 0 15px 0",
  color: 'white'
}));

export const CustomDiv = styled("div")`
  display: flex;
  column-gap: 50px;
`;
