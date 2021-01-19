import mongoose from 'mongoose'

const schema = new mongoose.Schema(
    {
        type: {
            type: String,
            trim: true,
            required: [true, 'You need to provide a Name for the profile type'],
            min: [2, 'Please provide a valid string for the type name']
        }
    },
    {
        timestamps: true
    }
)
const ProfileType = mongoose.model('ProfileType', schema)
export default ProfileType
