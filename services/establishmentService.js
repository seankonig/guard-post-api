import Establishment from '../database/models/Establishment.js'
import Profile from '../database/models/Profile.js'

export const createEstablishment = async ({ name }, userId) => {
    const newEstablishment = new Establishment({
        name
    })

    const result = await newEstablishment.save()
    if (result) {
        const profile = await Profile.findOneAndUpdate({ user: userId }, { establishment: result }, { new: true })
        return result
    }
}

export const fetchEstablishment = async (est) => {
    const establishment = await Establishment.findById(est)
    console.log(establishment)
    return establishment
}
