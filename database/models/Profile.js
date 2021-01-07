import mongoose from 'mongoose'
import unique from 'mongoose-unique-validator'
import { isEmail } from 'validator'

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
            trim: true,
            required: [true, 'You need to provide a valid email'],
            validate: [isEmail, 'Please provide a valid email address'],
            unique: true
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
        }
    },
    {
        timestamps: true
    }
)

schema.plugin(unique)

export const ProfileSchema = mongoose.model('Profile', schema)
