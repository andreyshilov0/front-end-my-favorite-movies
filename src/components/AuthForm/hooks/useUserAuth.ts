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

export const useUserAuth = () => {
  const { loading, error, data } = useQuery(USER);
  const [login, setLogin] = useState("");

  const userData = data?.user;

  userData &&
    userData.map((user: any | undefined) => {
      setLogin(() => user.login);
    });

  return { loading, error, login };
};
