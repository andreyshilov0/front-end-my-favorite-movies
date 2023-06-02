import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import { IAuthForm } from "../types";

export const USER = gql`
  query User {
    user {
      id
      login
    }
  }
`;

export const useUserAuth = (dataUser: IAuthForm) => {
  const { loading, error, data } = useQuery(USER);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const userData = data?.user;

  userData &&
    userData.map((user: IAuthForm) => {
      setLogin(() => user.login);
      setPassword(() => user.password);
    });

  const auth = () => {
    if (login === dataUser.login && password === dataUser.password) {
      return true;
    }
  };

  return { loading, error, auth };
};
