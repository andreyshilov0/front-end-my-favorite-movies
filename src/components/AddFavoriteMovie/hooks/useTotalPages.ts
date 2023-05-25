import { gql, useQuery } from "@apollo/client";
import { ITotalPages } from "../types";

const TOTAL_PAGES = gql`
query TotalPages {
  totalPages{totalPages}
}`

export const useTotalPages = () => {
  const { loading, error, data } = useQuery<ITotalPages>(TOTAL_PAGES)

  const totalPages = data?.totalPages

  return { loading, error, totalPages }
}