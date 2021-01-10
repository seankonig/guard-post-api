import Profile from '../database/models/Profile.js'
import validator from 'validator'
import User from '../database/models/User.js'

export const updateUserProfile = async (input) => {
    try {
        const isValidEmail = validator.isEmail(input.email)
        if (!isValidEmail) {
            throw new Error('The provided email address is not Valid')
        }
        const profile = await Profile.findOneAndUpdate(input.userId, { ...input }, { new: true })
        const user = await User.findById(input.userId)

        if (!profile) {
            const newProfile = new Profile({
                ...input,
                user: input.userId
            })

            const result = newProfile.save()

            return result
        }

        return profile
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

export const fetchUserProfile = async (userId) => {
    console.log(userId)
    try {
        const profile = await Profile.findOne({ user: userId })
        return profile
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}
