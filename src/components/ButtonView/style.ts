import styled from "@emotion/styled";

export const ButtonStyle = styled.button<{ blockView: boolean }>`
  background-color: ${(item) => (item.blockView ? "white" : "gray")};
  color: black;
  height: 40px;
  margin: 10px 1px;
`;
