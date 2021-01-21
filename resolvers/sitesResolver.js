import { combineResolvers } from 'graphql-resolvers'
import { isAuthenticated } from './middleware/index.js'

import { fetchAllSites, fetchSite, createSite, updateSite } from '../services/siteService.js'

const sitesResolver = {
    Query: {
        site: combineResolvers(isAuthenticated, (_, { id }) => fetchSite(id)),
        sites: combineResolvers(isAuthenticated, (_, { clientId }) => fetchAllSites(clientId))
    },
    Mutation: {
        createSite: combineResolvers(isAuthenticated, (parent, { input }) => createSite(parent, input)),
        updateSite: combineResolvers(isAuthenticated, (_, { input }) => updateSite(input))
    },
    Site: {
        client: combineResolvers(isAuthenticated, (parent, {}, { loaders }) => fetchUserProfile(parent, loaders))
    }
}

export default sitesResolver
