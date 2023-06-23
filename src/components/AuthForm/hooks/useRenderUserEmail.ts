import { gql, useQuery } from "@apollo/client";
import { IRenderUserEmail } from "../types";

export const USER = gql`
  query User {
    user {
      email
    }
  }
`;

export const useRenderUserEmail = () => {
  const { loading, error, data } = useQuery<IRenderUserEmail>(USER);

  const email = data?.email;

  return { loading, error, email };
};

export default useRenderUserEmail;
