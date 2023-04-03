import { ButtonStyleWrapper } from "@components/AuthForm/styles";
import { LanguageButtonStyle } from "./style";
import { ILanguageButton } from "./types";
import { LIST_LANGUAGE } from "@api/constants";

const LanguageButton = ({ changeLanguage }: ILanguageButton) => {
  return (
    <ButtonStyleWrapper>
      {LIST_LANGUAGE.map((language) => (
        <LanguageButtonStyle onClick={() => changeLanguage(language)}>
          {language}
        </LanguageButtonStyle>
      ))}
    </ButtonStyleWrapper>
  );
};

export default LanguageButton;
