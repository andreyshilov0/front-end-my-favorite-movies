import { ButtonStyleWrapper } from "@components/AuthForm/styles";
import { LanguageButtonStyle } from "./style";
import { ILanguageButton } from "./types";

const LanguageButton = ({ changeLanguage }: ILanguageButton) => {
  return (
    <ButtonStyleWrapper>
      <LanguageButtonStyle onClick={() => changeLanguage("en")}>
        EN
      </LanguageButtonStyle>
      <LanguageButtonStyle onClick={() => changeLanguage("ru")}>
        RU
      </LanguageButtonStyle>
    </ButtonStyleWrapper>
  );
};

export default LanguageButton;
