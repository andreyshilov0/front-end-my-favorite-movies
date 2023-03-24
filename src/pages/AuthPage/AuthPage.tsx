import { useEffect } from "react";
import AuthForm from "@components/AuthForm";
import { AuthImage, AuthPageContainer } from "./styles";
import logo from "@images/logo.svg";
import { localDate } from "localDate/data-backend";

const AuthPage = () => {
  useEffect(() => {
    localStorage.setItem("user", "test");
    localStorage.setItem("user_password", "12345");
    localStorage.setItem("backend_data", JSON.stringify(localDate));
  }, []);

  return (
    <AuthPageContainer>
      <AuthImage src={logo} alt="logo" />
      <AuthForm />
    </AuthPageContainer>
  );
};

export default AuthPage;
