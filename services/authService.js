import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../database/models/User.js'

export const signUp = async ({ username, password }) => {
    try {
        const user = await User.findOne({ username: username })

        if (user) {
            throw new Error('username taken')
        }

        const hashedPassword = await bcrypt.hash(password, 11)

        const newUser = new User({ username, password: hashedPassword })

        const result = await newUser.save()
        return result
    } catch (error) {
        throw error
    }
}

export const login = async ({ username, password }) => {
    try {
        const user = await User.findOne({ username: username })
        if (!user) {
            throw new Error('user not found')
        }
        const isValidPassword = await bcrypt.compare(password, user.password)
        if (!isValidPassword) {
            throw new Error('Your password is incorrect')
        }
        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1d' })
        return { token }
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const verifyUser = async (req) => {
    try {
        req.userId = null
        const bearerHeader = req.headers.authorization
        if (bearerHeader) {
            const token = bearerHeader.split(' ')[1]
            const payload = jwt.verify(token, process.env.JWT_SECRET)

            req.userId = payload.userId
        }
    } catch (error) {
        console.log(error)
        throw error
    }
}
