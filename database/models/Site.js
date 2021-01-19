import mongoose from 'mongoose'

const schema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: [true, 'You need to provide a name for the site'],
            min: [2, 'Please provide a valide String for the site name']
        },
        description: {
            type: String,
            trim: true
        },
        number: {
            type: String,
            trim: true,
            required: [true, 'You need to provide a site number']
        },
        lat: {
            type: String,
            trim: true,
            required: [true, 'You need to provide a latitude']
        },
        lng: {
            type: String,
            trim: true,
            required: [true, 'You need to provide a longitude']
        },
        client: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Client'
        }
    },
    {
        timestamps: true
    }
)

const Site = mongoose.model('Site', schema)
export default Site
