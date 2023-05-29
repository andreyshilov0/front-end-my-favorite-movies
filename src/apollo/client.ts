import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: process.env.DEFAULT_BACK_END_URL,
    cache: new InMemoryCache(),
})

export default client;