import AuthForm from "@components/AuthForm";
import { AuthImage, AuthPageContainer } from "./styles";
import logo from "@images/logo.svg";

const AuthPage = () => {

  return (
    <AuthPageContainer>
      <AuthImage src={logo} alt="logo" />
      <AuthForm />
    </AuthPageContainer>
  );
};

export default AuthPage;
