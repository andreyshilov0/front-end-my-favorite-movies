import {
  LanguageButtonStyle,
  ButtonStyleWrapper,
} from "@components/AuthForm/styles";

const LanguageButton = ({ changeLanguage }: any) => {
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
