import { AuthButton, LanguageButton } from "@components/AuthForm/styles";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {
  NavContainer,
  NavWrapper,
  NavHeader,
  LanguageButtonNav,
} from "./styles";

const NavBar = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation("main-page");
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  const onLogoutClick = () => {
    navigate("/");
    localStorage.clear();
  };

  return (
    <NavHeader>
      <NavContainer>
        {t("NavBar.titleName")}
        <NavWrapper>
          {t("NavBar.greetings", {
            username: localStorage.getItem("user"),
          })}
          <AuthButton variant="outlined" onClick={onLogoutClick}>
            {t("NavBar.logoutButton")}
          </AuthButton>
          <LanguageButtonNav onClick={() => changeLanguage("en")}>
            EN
          </LanguageButtonNav>
          <LanguageButtonNav onClick={() => changeLanguage("ru")}>
            RU
          </LanguageButtonNav>
        </NavWrapper>
      </NavContainer>
    </NavHeader>
  );
};

export default NavBar;
