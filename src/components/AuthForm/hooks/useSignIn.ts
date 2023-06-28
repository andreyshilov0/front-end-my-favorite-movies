import { gql, useMutation } from "@apollo/client";
import { ISignInUserMutation, ISignInResponseData } from "../types";
import { useTranslation } from "react-i18next";
import { useEmail } from "context/EmailContext";

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
  const { t, i18n } = useTranslation();
  const [signInUser, { loading }] = useMutation<ISignInUserMutation>(SIGN_IN);

  const { setEmail } = useEmail();

  const signIn = async (email: string, password: string) => {
    try {
      const response = await signInUser({
        variables: { email, password },
      });

      const data = response?.data?.signInUser as ISignInResponseData;
      if (!data) {
        return { error: t("noValidEmailOrPassword"), token: "", user: null };
      }

      const { token, user } = data;

      setEmail(user?.email || "");

      return { token, user, error: "" };
    } catch (error) {
      return { error: t("noValidEmailOrPassword"), token: "", user: null };
    }
  };

  return { loading, signIn };
};

export default useSignIn;
