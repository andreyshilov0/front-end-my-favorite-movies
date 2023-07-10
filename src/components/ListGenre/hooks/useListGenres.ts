import { gql, useQuery } from "@apollo/client";
import { IDataListGenres } from "../types";

export const LIST_GENRES = gql`
  query ListGenres {
    listGenres {
      id
      name
    }
  }
`;

export const useListGenres = () => {
  const { loading, error, data } = useQuery<IDataListGenres>(LIST_GENRES);

  const listGenres = data?.listGenres

  return { loading, error, listGenres };
};
