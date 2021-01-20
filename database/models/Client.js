import mongoose from 'mongoose'

const schema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: [true, 'You need to provide a first name'],
            min: [2, 'Please provide a valide String for the first name']
        },
        email: {
            type: String,
            trim: true,
            required: [true, 'You need to provide a contact email']
        },
        establishment: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Establishment'
        },
        sites: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Site'
            }
        ]
    },
    {
        timestamps: true
    }
)

const Client = mongoose.model('Client', schema)
export default Client
