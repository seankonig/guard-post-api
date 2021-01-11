import User from '../database/models/User.js'

const batchUsers = async (userIds) => {
    console.log(userIds)
    const users = await User.find({ _id: { $in: userIds } })

    return userIds.map((userId) => users.find((user) => user.id === userId))
}

const users = {
    batchUsers
}

export default users
