import { ApolloError } from "@apollo/client";

export interface ICommonApiResponse {
    loading: boolean;
    error: ApolloError;
}
