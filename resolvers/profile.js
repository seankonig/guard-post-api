import { uuid } from 'uuidv4'
import { profiles, establishments } from '../constants/index.js'

const profileResolver = {
    Query: {
        profile: (_, { id }) => profiles.find((profile) => profile.id === id)
    },
    Mutation: {
        createProfile: (_, { input }) => {
            const profile = {
                ...input,
                id: uuid()
            }
            profiles.push(profile)
            return profile
        }
    },
    Profile: {
        establishment: ({ id }) => {
            return establishments.find((est) => id === est.id)
        }
    }
}

export default profileResolver
