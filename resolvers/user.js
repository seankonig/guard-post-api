import { profiles, users } from '../constants/index.js'
import User from '../database/models/User.js'

import bcrypt from 'bcrypt'

const userResolver = {
    Query: {
        users: () => users,
        user: (_, { id }) => users.find((user) => user.id === id)
    },
    Mutation: {
        signUp: async (_, { input }) => {
            try {
                const hashedPassword = await bcrypt.hash(input.password, 11)

                const newUser = new User({ ...input, password: hashedPassword })

                const result = await newUser.save()
                return result
            } catch (error) {
                console.log(error)
                throw error
            }
        }
    },
    User: {
        profile: ({ id }) => {
            return profiles.find((profile) => id === profile.userID)
        }
    }
}

export default userResolver
