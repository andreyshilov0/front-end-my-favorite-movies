import styled from "@emotion/styled";
import { Button, Paper, Pagination } from "@mui/material";

export const AddMovieListWrapper = styled.div<{ blockView: boolean }>`
  display: flex;
  flex-direction: ${(item) => (item.blockView ? "row" : "column")};
  flex-wrap: ${(item) => (item.blockView ? "wrap" : "nowrap")};
`;

export const AddFavoriteBodyWrapper = styled.div<{ blockView: boolean }>`
  display: ${(item) => (item.blockView ? "block" : "flex")};
  flex-wrap: ${(item) => (item.blockView ? "wrap" : "row")};
`;

export const ImageWrapper = styled.img<{ blockView: boolean }>`
  width: ${(item) => (item.blockView ? "250px" : "150px ")};
  height: ${(item) => (item.blockView ? "180px" : "100px ")};
  margin: 10px 15px;
`;

export const AddMovieButton = styled(Button)`
  width: 300px;
  height: 60px;
  margin: 10px;
`;

export const MovieWrapperOverview = styled.div<{ blockView: boolean }>`
  display: flex;
  font-size: 16px;
  overflow: ${(item) => (item.blockView ? "auto" : "visible")};
  width: ${(item) => (item.blockView ? "280px" : "auto")};
  height: ${(item) => (item.blockView ? "100px" : "auto")};
  font-size: ${(item) => (item.blockView ? "14px" : "16px")};
  margin: ${(item) => (item.blockView ? "20px 10px" : "auto")};
`;

export const AddFavoriteMoviePaper = styled(Paper)`
  margin-top: 30px;
`;

export const MoviePagination = styled(Pagination)`
  display: flex;
  justify-content: center;
`;
