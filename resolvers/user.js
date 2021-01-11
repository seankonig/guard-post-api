import { combineResolvers } from 'graphql-resolvers'
import { isAuthenticated } from './middleware/index.js'

import { signUp, login } from '../services/authService.js'
import { fetchAllUsers, findUser, me } from '../services/userService.js'
import { fetchUserProfile } from '../services/profileService.js'

const userResolver = {
    Query: {
        users: combineResolvers(isAuthenticated, () => fetchAllUsers()),
        user: combineResolvers(isAuthenticated, (_, { id }) => findUser(id)),
        me: combineResolvers(isAuthenticated, (_, {}, { userId }) => me(userId))
    },
    Mutation: {
        signUp: (_, { input }) => signUp(input),
        login: (_, { input }) => login(input)
    },
    User: {
        profile: combineResolvers(isAuthenticated, (parent, {}, { loaders }) => fetchUserProfile(parent, loaders))
    }
}

export default userResolver
