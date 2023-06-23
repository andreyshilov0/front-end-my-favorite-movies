import { gql, useMutation } from "@apollo/client";
import { ISignInUserMutation } from "../types";
import { useTranslation } from "react-i18next";
const { t, i18n } = useTranslation();

const SIGN_IN = gql`
  mutation SignInUser($email: String!, $password: String!) {
    signInUser(email: $email, password: $password) {
      token
      user {
        id
        email
      }
    }
  }
`;

const useSignIn = () => {
  const [signInUser, { loading, error }] =
    useMutation<ISignInUserMutation>(SIGN_IN);

  const signIn = async (email: string, password: string) => {
    try {
      const response = await signInUser({
        variables: { email, password },
      });

      const data = response?.data;
      if (!data) {
        return { error: t("noValidEmailOrPassword") };
      }

      const { token, user } = data.signInUser;

      return { token, user };
    } catch (error) {
      return { error: t("noValidEmailOrPassword") };
    }
  };

  return { loading, error, signIn };
};

export default useSignIn;
