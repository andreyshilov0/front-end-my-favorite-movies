import { gql, useQuery } from "@apollo/client";
import { IListGenres } from "../types";

const LIST_GENRES = gql`
  query ListGenres {
    listGenres {
      id
      name
    }
  }
`;

export const useListGenres = () => {
  const { loading, error, data } = useQuery(LIST_GENRES);

  const listGenres = data?.listGenres

  return { loading, error, listGenres };
};
