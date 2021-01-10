import { skip } from 'graphql-resolvers'

export const isAuthenticated = (_, {}, { userId }) => {
    if (!userId) {
        throw new Error('Please login before you continue')
    }
    return skip
}
