import { Field, Form } from "react-final-form";
import { useNavigate } from "react-router-dom";
import { AuthTextField, AuthPaper, AuthButton, ButtonPanel } from "./styles";
import { isCredintialValid } from "./isCredintialValid";
import { IAuthForm } from "./types";
import { useTranslation } from "react-i18next";
import LanguageButton from "@components/LanguageButton";

const AuthForm = () => {
  const navigate = useNavigate();

  const { t, i18n } = useTranslation();

  const onFormSubmit = (data: IAuthForm) => {
    if (isCredintialValid(data)) {
      navigate("/main");
    } else {
      alert("Неверный логин или пароль");
    }
  };

  return (
    <Form
      onSubmit={onFormSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <AuthPaper>
            <Field<string>
              name="username"
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
              <LanguageButton />
            </ButtonPanel>
          </AuthPaper>
        </form>
      )}
    />
  );
};

export default AuthForm;
