import ProfileType from '../database/models/ProfileType.js'

export const createProfileType = async (input) => {
    try {
        const profileType = new ProfileType({
            ...input
        })

        const result = await profileType.save()

        if (result) {
            return result
        }
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

export const fetchProfileTypes = async () => {
    try {
        const profileTypes = await ProfileType.find({})

        if (profileTypes) {
            return profileTypes
        }
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}
