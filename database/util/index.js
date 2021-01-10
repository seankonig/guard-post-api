import mongoose from 'mongoose'

export const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        })
        console.log('connected mongo')
    } catch (error) {
        console.log(error)
        throw error
    }
}
