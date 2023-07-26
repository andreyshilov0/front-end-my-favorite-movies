import { useEffect } from "react";
import { AuthButton } from "@components/AuthForm/styles";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { NavContainer, NavWrapper, NavHeader, MainButton } from "./styles";
import { useEmailContext } from "context/hooks/useEmailContext";

const NavBar = () => {
  const { email } = useEmailContext();
  const navigate = useNavigate();
  const { t } = useTranslation("main-page");

  const onLogoutClick = () => {
    navigate("/");
  };

  useEffect(() => {
    const cachedEmail = localStorage.getItem("currentEmail");
    if (cachedEmail) {
      email.setEmail(cachedEmail);
    }
  }, [email]);

  return (
    <NavHeader>
      <NavContainer>
        <MainButton
          className="main-button" 
          onClick={() => navigate("/main")} 
        >
          {t("navBar.titleName")}
        </MainButton>
        <NavWrapper>
          {t("navBar.greetings", {
            email: email.currentEmail,
          })}
          <AuthButton variant="outlined" onClick={onLogoutClick}>
            {t("navBar.logoutButton")}
          </AuthButton>
        </NavWrapper>
      </NavContainer>
    </NavHeader>
  );
};

export default NavBar;