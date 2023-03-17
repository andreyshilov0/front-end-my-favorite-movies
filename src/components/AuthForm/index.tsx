import { Field, Form } from "react-final-form";
import { Button } from "@mui/material";
import { IAuthFormData } from "./types";
import { useNavigate } from "react-router-dom";
import {  CustomTextField,  CustomPaper,} from "./styles";


const  AuthForm = () => {
  const navigate = useNavigate();

  const onFormSubmit = (data: IAuthFormData) => {
    if (
      localStorage.getItem("user") === data.username && localStorage.getItem("user_password") === data.password
      
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
          <CustomPaper>
            <Field<string>
              name="username"
              render={({ input }) => (
                <CustomTextField
                  {...input}
                  label="Имя пользователя или e-mail"
                />
              )}
            />
            <Field<string>
              name="password"
              render={({ input }) => (
                <CustomTextField
                  {...input}
                  type="password"
                  label="Пароль"
                />
              )}
            />
              <Button variant="contained" type="submit">
              Войти
            </Button>
          </CustomPaper>
        </form>
      )}
    />
  );
};

export default AuthForm;
