import { combineResolvers } from 'graphql-resolvers'
import { isAuthenticated } from './middleware/index.js'

import { fetchAllSites, fetchSite, createSite } from '../services/siteService.js'

const sitesResolver = {
    Query: {
        site: combineResolvers(isAuthenticated, (_, { id }) => fetchSite(id)),
        sites: combineResolvers(isAuthenticated, (_, { clientId }) => fetchAllSites(clientId))
    },
    Mutation: {
        createSite: combineResolvers(isAuthenticated, (_, { input }) => createSite(input))
    },
    Site: {
        client: combineResolvers(isAuthenticated, (parent, {}, { loaders }) => fetchUserProfile(parent, loaders))
    }
}

export default sitesResolver
