import { combineResolvers } from 'graphql-resolvers'
import { isAuthenticated } from './middleware/index.js'
import { createProfileType, fetchProfileTypes } from '../services/profileTypesService.js'

const profileTypesResolver = {
    Query: {
        profileTypes: combineResolvers(isAuthenticated, () => fetchProfileTypes())
    },
    Mutation: {
        createProfileType: combineResolvers(isAuthenticated, (_, { input }) => createProfileType(input))
    }
}

export default profileTypesResolver
