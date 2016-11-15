import ApolloClient, { createNetworkInterface, addTypename } from 'apollo-client'

// Create the apollo client
const apolloClient = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:8000/graphql',
    transportBatching: true
  }),
  queryTransformer: addTypename,
  dataIdFromObject: r => r.id
})

export default apolloClient
