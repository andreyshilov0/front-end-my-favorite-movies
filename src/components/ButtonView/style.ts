import styled from "@emotion/styled";

export const ButtonStyle = styled.button<{ blockView: boolean }>`
  background-color: ${(props) => (props.blockView ? "white" : "grey")};
  color: black;
  height: 40px;
  margin: 10px 1px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.blockView ? "lightgrey" : "darkgrey")};
  }

  &:active {
    background-color: ${(props) => (props.blockView ? "lightgrey" : "grey")};
  }
`;
