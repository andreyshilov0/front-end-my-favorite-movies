import { useEffect } from "react";
import AuthForm from "@components/AuthForm";
import { AuthPageContainer } from "./styles";
import logo from "@images/logo.svg";

const AuthPage = () => {
  useEffect(() => {
    localStorage.setItem("user", "test");
    localStorage.setItem("user_password", "12345");
  }, []);

  return (
    <AuthPageContainer>
      <img src={logo} alt="logo" width={120} height={120} />
      <AuthForm />
    </AuthPageContainer>
  );
};

export default AuthPage;
