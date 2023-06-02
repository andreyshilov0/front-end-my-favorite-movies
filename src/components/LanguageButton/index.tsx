import { ButtonStyleWrapper } from "@components/AuthForm/styles";
import { LanguageButtonStyle } from "./style";
import { ILanguageButton } from "./types";
import { LIST_LANGUAGES } from "constants/constants";

const LanguageButton = ({ changeLanguage }: ILanguageButton) => {
  return (
    <ButtonStyleWrapper>
      {LIST_LANGUAGES.map((language) => (
        <LanguageButtonStyle
          key={language}
          onClick={() => changeLanguage(language)}
        >
          {language}
        </LanguageButtonStyle>
      ))}
    </ButtonStyleWrapper>
  );
};

export default LanguageButton;
