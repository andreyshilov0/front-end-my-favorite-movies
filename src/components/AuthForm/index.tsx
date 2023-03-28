import { Field, Form } from "react-final-form";
import { useNavigate } from "react-router-dom";
import {
  AuthTextField,
  AuthPaper,
  AuthButton,
  LanguageButton,
  ButtonPanel,
} from "./styles";
import { isCredintialValid } from "./isCredintialValid";
import { IAuthForm } from "./types";
import { useTranslation } from "react-i18next";

const AuthForm = () => {
  const navigate = useNavigate();

  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

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
                <AuthTextField {...input} label={t("user_login_label")} />
              )}
            />
            <Field<string>
              name="password"
              render={({ input }) => (
                <AuthTextField
                  {...input}
                  type="password"
                  label={t("user_password_label")}
                />
              )}
            />
            <ButtonPanel>
              <AuthButton variant="contained" type="submit">
                {t("button_login")}
              </AuthButton>
              <LanguageButton onClick={() => changeLanguage("en")}>
                EN
              </LanguageButton>
              <LanguageButton onClick={() => changeLanguage("ru")}>
                RU
              </LanguageButton>
            </ButtonPanel>
          </AuthPaper>
        </form>
      )}
    />
  );
};

export default AuthForm;
