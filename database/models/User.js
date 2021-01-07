import mongoose from 'mongoose'
import unique from 'mongoose-unique-validator'

const schema = new mongoose.Schema(
    {
        username: {
            type: String,
            trim: true,
            lowercase: true,
            required: [true, 'You need to provide a username'],
            min: [6, 'username should contain at least 6 characters'],
            unique: [true, 'username has been taken']
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

schema.plugin(unique)
const User = mongoose.model('User', schema)
export default User
