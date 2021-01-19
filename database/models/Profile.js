import mongoose from 'mongoose'

const schema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            trim: true,
            required: [true, 'You need to provide a first name'],
            min: [2, 'Please provide a valide String for the first name']
        },
        lastName: {
            type: String,
            trim: true,
            required: [true, 'You need to provide a last name'],
            min: [2, 'Please provide a valide String for the last name']
        },
        email: {
            type: String,
            trim: true
        },
        birthDate: {
            type: String,
            trim: true
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        establishment: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Establishment'
        },
        type: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ProfileType'
        }
    },
    {
        timestamps: true
    }
)

const Profile = mongoose.model('Profile', schema)
export default Profile
