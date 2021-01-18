import { combineResolvers } from 'graphql-resolvers'
import { isAuthenticated } from './middleware/index.js'

import {
    fetchUserProfile,
    updateUserProfile,
    fetchProfile,
    fetchEstablishmentProfiles,
    createProfile
} from '../services/profileService.js'
import { fetchEstablishment } from '../services/establishmentService.js'

const profileResolver = {
    Query: {
        profile: combineResolvers(isAuthenticated, (_, { id }) => fetchProfile(id)),
        establishmentProfiles: combineResolvers(isAuthenticated, (_, { id }) => fetchEstablishmentProfiles(id))
    },
    Mutation: {
        createProfile: combineResolvers(isAuthenticated, (_, { input }) => createProfile(input)),
        updateProfile: combineResolvers(isAuthenticated, (_, { input }) => updateUserProfile(input))
    },
    Profile: {
        user: combineResolvers(isAuthenticated, (parent, {}, { loaders }) => fetchUserProfile(parent, loaders)),
        establishment: combineResolvers(isAuthenticated, ({ establishment }) => fetchEstablishment(establishment))
    }
}

export default profileResolver
