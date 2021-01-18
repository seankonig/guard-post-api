import User from '../database/models/User.js'

const batchUsers = async (users) => {
    const user = await User.find({ user: { $in: users } })
    return users.map((user) => profiles.find((profile) => user.equals(profile.user)))
}

const users = {
    batchProfiles
}

export default users
