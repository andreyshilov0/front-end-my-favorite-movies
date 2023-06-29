import { gql, useMutation } from "@apollo/client";
import { ISignInUserMutation, ISignInResponseData } from "../types";
import { useTranslation } from "react-i18next";
import { useEmailContext } from "context/hooks/useEmailContext";

const SIGN_IN = gql`
  mutation SignInUser($email: String!, $password: String!) {
    signInUser(input: { email: $email, password: $password }) {
      token
      user {
        id
        email
      }
    }
  }
`;

const useSignIn = () => {
  const { t } = useTranslation();
  const [signInUser, { loading, error }] =
    useMutation<ISignInUserMutation>(SIGN_IN);
  const { setEmail } = useEmailContext();

  const signIn = async (email: string, password: string) => {
    try {
      const response = await signInUser({
        variables: { email, password },
      });

      const data = response.data?.signInUser as ISignInResponseData | undefined;
      const token = data?.token;
      const user = data?.user;
      const errorMessage = !data ? t("anErrorOccurred") : "";

      setEmail(user?.email || null);

      return { token, user, error: errorMessage };
    } catch (error) {
      return { error: t("noValidEmailOrPassword"), token: "", user: null };
    }
  };

  return { loading, error, signIn };
};

export default useSignIn;
