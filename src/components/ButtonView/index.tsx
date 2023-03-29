import { ButtonStyle } from "./style";
import React from "react";

const ButtonView = ({ onClick, name, viewBlock }: any) => {
  return (
    <ButtonStyle onClick={onClick} blockView={!viewBlock}>
      {name}
    </ButtonStyle>
  );
};

export default ButtonView;
