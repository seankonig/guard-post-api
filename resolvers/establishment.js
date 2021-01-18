import { combineResolvers } from 'graphql-resolvers'
import { isAuthenticated } from './middleware/index.js'

import { createEstablishment } from '../services/establishmentService.js'

const establishmentResolver = {
    Query: {
        establishments: () => [],
        establishment: (_, { id }) => null
    },

    Mutation: {
        createEstablishment: combineResolvers(isAuthenticated, (_, { input }, { userId }) =>
            createEstablishment(input, userId)
        )
    }
}

export default establishmentResolver
