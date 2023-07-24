import styled from "@emotion/styled";
import { Button, Paper, Pagination } from "@mui/material";

export const AddMovieListWrapper = styled.div<{ blockView: boolean }>`
  display: flex;
  flex-direction: ${(item) => (item.blockView ? "row" : "column")};
  flex-wrap: ${(item) => (item.blockView ? "wrap" : "nowrap")};
  padding: 1px;

`;

export const AddFavoriteBodyWrapper = styled.div<{ blockView: boolean }>`
  display: ${(item) => (item.blockView ? "block" : "flex")};
  flex-wrap: ${(item) => (item.blockView ? "wrap" : "row")};
  align-items: center;
`;

export const ImageWrapper = styled.img<{ blockView: boolean }>`
  width: ${(item) => (item.blockView ? "250px" : "150px")};
  height: ${(item) => (item.blockView ? "180px" : "100px")};
  margin: 10px 15px;
`;

export const AddFavoriteMoviePaper = styled(Paper)`
  margin-top: 30px;
`;

export const MoviePagination = styled(Pagination)`
  display: flex;
  justify-content: center;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  width: 100%;
  justify-content: center;
`;

export const AddMovieButton = styled(Button) <{ blockView: boolean }>`
  width: ${(props) => (props.blockView ? "280px" : "550px")} !important;
  height: 60px;
  margin: 10px;
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
`;

export const MovieTitle = styled.div<{ blockView: boolean }>`
  font-size: 18px;
  font-weight: bold;
  word-wrap: break-word;
  width: ${(item) => (item.blockView ? "250px" : "100%")};
  max-width: ${(item) => (item.blockView ? "250px" : "50%")};
  height: 100px;
  margin: 10px 0;
  overflow: hidden;
  text-align: center;
  line-height: 1.5;
`;

export const MovieWrapperOverview = styled.div<{ blockView: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 16px;
  overflow: auto;
  width: ${(item) => (item.blockView ? "280px" : "100%")};
  max-width: ${(item) => (item.blockView ? "280px" : "100%")};
  height: 100px;
  margin: ${(item) => (item.blockView ? "0 10px" : "auto")};
  word-wrap: break-word;
  text-overflow: ellipsis;
  text-align: center;
`;
