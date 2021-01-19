import { combineResolvers } from 'graphql-resolvers'
import { isAuthenticated } from './middleware/index.js'

import { fetchAllClients, fetchClient, createClient, fetchClientSites } from '../services/clientService.js'

const clientResolver = {
    Query: {
        client: combineResolvers(isAuthenticated, (_, { id }) => fetchClient(id)),
        clients: combineResolvers(isAuthenticated, () => fetchAllClients())
    },
    Mutation: {
        createClient: combineResolvers(isAuthenticated, (_, { input }) => createClient(input))
    },
    Client: {
        sites: combineResolvers(isAuthenticated, (parent, {}, { loaders }) => fetchClientSites(parent, loaders))
    }
}

export default clientResolver
