import { ApolloLink } from 'apollo-link'
import { setContext } from 'apollo-link-context'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { parse } from 'cookie'

import ApolloLogger from './ApolloLogger'


export default ctx => {
  const loggerLink = process.env.NODE_ENV !== 'production' ? [new ApolloLogger()] : []

  const httpLink = new HttpLink({
    uri: process.env.HTTP_ENDPOINT,
    credentials: 'same-origin',
  })

  const authLink = setContext((_, { headers }) => {
    const token = process.env.DATO_ACCESS_TOKEN
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : null,
      },
    }
  })

  return {
    link: ApolloLink.from([...loggerLink, authLink, httpLink]),
    cache: new InMemoryCache(),
  }
}
