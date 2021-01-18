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
        if (users) {
            return users
        }
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

export const findUser = async (userId) => {
    try {
        const user = await User.findById(userId)
        if (user) {
            return user
        }
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

export const loggedInUser = async (userId) => {
    try {
        const user = await User.findById(userId)
        if (!user) {
            return null
        }
        return user
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}
