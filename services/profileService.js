import Profile from '../database/models/Profile.js'
import validator from 'validator'

export const updateUserProfile = async (input) => {
    try {
        // const isValidEmail = validator.isEmail(input.email)
        // if (!isValidEmail) {
        //     throw new Error('The provided email address is not Valid')
        // }
        const profile = await Profile.findOneAndUpdate(
            { user: input.userId },
            { ...input, establishment: input.establishmentId, type: input.typeId },
            { new: true }
        )

        return profile
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

export const createProfile = async (input) => {
    try {
        const newProfile = new Profile({
            ...input,
            establishment: input.establishmentId,
            type: input.typeId
        })

        const result = await newProfile.save()
        if (result) {
            return result
        }
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

export const fetchProfile = async (id) => {
    try {
        const profile = await Profile.findById(id)

        if (profile) {
            return profile
        }
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

export const fetchEstablishmentProfiles = async (id) => {
    try {
        const profiles = await Profile.find({ establishment: id })
        if (profiles) {
            return profiles
        }
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

export const fetchUserProfile = async (parent, loaders) => {
    try {
        const profile = await loaders.profile.load(parent)

        return profile
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}
