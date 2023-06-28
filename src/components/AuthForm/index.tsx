import { Field, Form } from "react-final-form";
import { useNavigate } from "react-router-dom";
import { AuthTextField, AuthPaper, AuthButton, ButtonPanel } from "./styles";
import { IUserFormLogin } from "./types";
import { useTranslation } from "react-i18next";
import useSignIn from "./hooks/useSignIn";

const AuthForm = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { signIn } = useSignIn();

  const onFormSubmit = async (data: IUserFormLogin) => {
    try {
      const { token, user, error } = await signIn(data.email, data.password);
      if (token && user) {
        navigate("/main");
      } else {
        alert(t("noValidEmailOrPassword"));
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Form
      onSubmit={onFormSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <AuthPaper>
            <Field<string>
              name="email"
              render={({ input }) => (
                <AuthTextField {...input} label={t("userLoginLabel")} />
              )}
            />
            <Field<string>
              name="password"
              render={({ input }) => (
                <AuthTextField
                  {...input}
                  type="password"
                  label={t("userPasswordLabel")}
                />
              )}
            />
            <ButtonPanel>
              <AuthButton variant="contained" type="submit">
                {t("buttonLogin")}
              </AuthButton>
            </ButtonPanel>
          </AuthPaper>
        </form>
      )}
    />
  );
};

export default AuthForm;
