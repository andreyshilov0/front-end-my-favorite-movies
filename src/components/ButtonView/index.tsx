import { ButtonStyle } from "./style";
import { IButtonView } from "./types";

const ButtonView = ({ onClick, name, viewBlock }: IButtonView) => {
  return (
    <ButtonStyle onClick={onClick} blockView={!viewBlock}>
      {name}
    </ButtonStyle>
  );
};

export default ButtonView;
