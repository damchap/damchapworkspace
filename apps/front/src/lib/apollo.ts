import { ApolloClient, InMemoryCache } from '@apollo/client'

const apolloClient = new ApolloClient({
    uri: process.env.URI_FOR_API + 'api/graphql',
    cache: new InMemoryCache(),
})

export default apolloClient