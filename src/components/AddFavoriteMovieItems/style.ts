import styled from "@emotion/styled";
import { Button, Paper } from "@mui/material";

export const AddMovieListWrapper = styled.div<{ blockView: boolean }>`
  display: flex;
  flex-direction: ${(item) => (item.blockView ? "" : "column")};
  flex-wrap: ${(item) => (item.blockView ? "wrap" : "")};
`;

export const AddFavoriteBodyWrapper = styled.div<{ blockView: boolean }>`
  display: ${(item) => (item.blockView ? "" : "flex")};
  flex-wrap: ${(item) => (item.blockView ? "wrap" : "")};
  justify-content: space-around;
`;

export const ImageWrapper = styled.img<{ blockView: boolean }>`
  width: ${(item) => (item.blockView ? "250px" : "150px ")};
  height: ${(item) => (item.blockView ? "180px" : "100px ")};
  margin: 10px 15px;
`;

export const AddMovieButtonList = styled(Button)`
  width: 300px;
  height: 60px;
  margin: 10px;
`;

export const MovieWrapperOverview = styled.div<{ blockView: boolean }>`
  display: flex;
  font-size: 16px;
  overflow: ${(item) => (item.blockView ? "auto" : "")};
  width: ${(item) => (item.blockView ? "280px" : "")};
  height: ${(item) => (item.blockView ? "100px" : "")};
  font-size: ${(item) => (item.blockView ? "14px" : "16px")};
  margin: ${(item) => (item.blockView ? "20px 10px" : "auto")};
`;

export const AddFavoriteMoviePaper = styled(Paper)`
  margin-top: 30px;
`;
