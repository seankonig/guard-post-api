import User from '../database/models/User.js'

export const me = async (userId) => {
    try {
        const user = await User.findById(userId)
        return user
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

export const fetchAllUsers = async () => {
    try {
        const users = await User.find({})
        return users
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

export const findUser = async (userId) => {
    try {
        const user = await User.findById(userId)
        return user
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}
