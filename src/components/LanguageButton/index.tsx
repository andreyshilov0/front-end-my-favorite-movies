import { ButtonStyleWrapper } from "@components/AuthForm/styles";
import { LanguageButtonStyle } from "./style";
import { ILanguageButton } from "./types";

const LanguageButton = ({ changeLanguage }: ILanguageButton) => {
  const listLanguage = ["ru", "en"];

  return (
    <ButtonStyleWrapper>
      {listLanguage.map((language) => (
        <LanguageButtonStyle onClick={() => changeLanguage(language)}>
          {language}
        </LanguageButtonStyle>
      ))}
    </ButtonStyleWrapper>
  );
};

export default LanguageButton;
