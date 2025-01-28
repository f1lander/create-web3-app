import {
  HttpLink,
  ApolloLink,
  ApolloClient,
  InMemoryCache,
} from '@apollo/client';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support';
const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_API_URL,
});

const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from([httpLink]),
  });
});

export { getClient };
