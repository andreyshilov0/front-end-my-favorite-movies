import { gql, useQuery } from "@apollo/client";
import { useState } from "react";

export const USER = gql`
  query User {
    user {
      id
      login
    }
  }
`;

export const useUserAuth = (dataUser: any) => {
  const { loading, error, data } = useQuery(USER);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const userData = data?.user;

  userData &&
    userData.map((user: any | undefined) => {
      setLogin(() => user.login);
      setPassword(() => user.password);
    });

  const auth = () => {
    if (login === dataUser.username && password === dataUser.password) {
      return true;
    }
  };

  return { loading, error, auth };
};
