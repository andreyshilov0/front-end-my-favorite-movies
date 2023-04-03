import { ButtonStyleWrapper } from "@components/AuthForm/styles";
import { LanguageButtonStyle } from "./style";
import { ILanguageButton } from "./types";
import { listLanguages } from "@api/constants";

const LanguageButton = ({ changeLanguage }: ILanguageButton) => {
  return (
    <ButtonStyleWrapper>
      {listLanguages.map((language) => (
        <LanguageButtonStyle onClick={() => changeLanguage(language)}>
          {language}
        </LanguageButtonStyle>
      ))}
    </ButtonStyleWrapper>
  );
};

export default LanguageButton;
