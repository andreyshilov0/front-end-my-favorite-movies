import { gql, useQuery } from "@apollo/client";
import { IAuthForm, IAuthData } from "../types";

export const USER = gql`
  query User {
    user {
      id
      login
    }
  }
`;

export const useUserAuth = (dataUser: IAuthForm) => {
  const { loading, error, data } = useQuery<IAuthData>(USER);

  const userData = data?.user;

  const login = userData?.map((user: IAuthForm) => {
    return user.login
  });

  const password = userData?.map((user: IAuthForm) => {
    return user.password
  });

  const auth = () => {
    if (login === dataUser.login && password === dataUser.password) {
      return true;
    }
  };

  return { loading, error, auth };
};

export const useRenderLogin = () => {
  const { loading, error, data } = useQuery<IAuthData>(USER);

  const login = data?.user.map((login: IAuthData) => {
    const loginName = login.login;
    return loginName;
  });

  return { loading, error, login };
};
