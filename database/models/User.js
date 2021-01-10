import mongoose from 'mongoose'

const schema = new mongoose.Schema(
    {
        username: {
            type: String,
            trim: true,
            lowercase: true,
            required: [true, 'You need to provide a username'],
            min: [6, 'username should contain at least 6 characters']
        },
        password: {
            type: String,
            trim: true,
            required: [true, 'You need to provide a password']
        },
        profile: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Profile'
        }
    },
    {
        timestamps: true
    }
)

const User = mongoose.model('User', schema)
export default User
