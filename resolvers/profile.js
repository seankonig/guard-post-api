import { combineResolvers } from 'graphql-resolvers'
import { isAuthenticated } from './middleware/index.js'

import { fetchUserProfile, updateUserProfile } from '../services/profileService.js'
import { establishments } from '../constants/index.js'

const profileResolver = {
    Query: {
        profile: (_, { id }) => fetchUserProfile(id)
    },
    Mutation: {
        updateProfile: combineResolvers(isAuthenticated, (_, { input }) => updateUserProfile(input))
    },
    Profile: {
        establishment: ({ id }) => {
            return establishments.find((est) => id === est.id)
        }
    }
}

export default profileResolver
