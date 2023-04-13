import { useEffect } from "react";
import AuthForm from "@components/AuthForm";
import { AuthImage, AuthPageContainer } from "./styles";
import logo from "@images/logo.svg";

const AuthPage = () => {
  useEffect(() => {
    localStorage.setItem("user", "test");
    localStorage.setItem("user_password", "12345");
    localStorage.setItem("backend_data_favorite_genres", JSON.stringify([]));
  }, []);

  return (
    <AuthPageContainer>
      <AuthImage src={logo} alt="logo" />
      <AuthForm />
    </AuthPageContainer>
  );
};

export default AuthPage;
