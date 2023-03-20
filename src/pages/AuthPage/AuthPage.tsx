import { useEffect } from "react";
import AuthForm from "@components/AuthForm";
import { CustomContainer } from "./styles";
import logo from "@images/logo.svg";


const AuthPage = () => {
  useEffect(() => {
    localStorage.setItem("user", "test");
    localStorage.setItem("user_password", "12345");
    
  }, []);

  return (
    <CustomContainer>
      <img src={logo} width={120} height={120} />
      <AuthForm />
    </CustomContainer>
  );
};

export default AuthPage;
