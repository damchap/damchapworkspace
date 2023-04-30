import { ApolloClient, InMemoryCache } from '@apollo/client'

let dotenv = require('dotenv');
dotenv.config()

const apolloClient = new ApolloClient({
    uri: process.env.URI_FOR_API + 'api/graphql',
    cache: new InMemoryCache(),
})

export default apolloClient