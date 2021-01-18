import Profile from '../database/models/Profile.js'


const batchProfiles = async (users) => {
    const profiles = await Profile.find({ user: { $in: users } })
    return users.map((user) => profiles.find(profile => user.equals(profile.user)))
}

const profiles = {
    batchProfiles
}

export default profiles