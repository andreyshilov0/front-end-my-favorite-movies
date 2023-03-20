import { Field, Form } from "react-final-form";
import { IAuthForm } from "./types";
import { useNavigate } from "react-router-dom";
import { AuthTextField, AuthPaper, AuthButton } from "./styles";

const AuthForm = () => {
  const navigate = useNavigate();

  const onFormSubmit = (data: IAuthForm) => {
    if (
      localStorage.getItem("user") === data.username &&
      localStorage.getItem("user_password") === data.password
    ) {
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
                <AuthTextField {...input} label="Имя пользователя или e-mail" />
              )}
            />
            <Field<string>
              name="password"
              render={({ input }) => (
                <AuthTextField {...input} type="password" label="Пароль" />
              )}
            />
            <AuthButton variant="contained" type="submit">
              Войти
            </AuthButton>
          </AuthPaper>
        </form>
      )}
    />
  );
};

export default AuthForm;
