import Client from '../database/models/Client.js'
import Site from '../database/models/Site.js'

export const fetchAllClients = async () => {
    try {
        const clients = Client.find({})

        if (clients) {
            return clients
        }
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

export const fetchClient = async (id) => {
    try {
        const client = await Client.findById(id)

        if (client) {
            return client
        }
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

export const createClient = async (input) => {
    try {
        const client = new Client({
            ...input,
            establishment: input.establishmentId
        })

        const result = await client.save()

        if (result) {
            return result
        }
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

export const fetchClientSites = async (parent, loaders) => {
    try {
        //implement loaders
        // const sites = await loaders.client.load(parent)
        // console.log(sites)
        // return sites

        const sites = await Site.find({ client: parent._id })
        return sites
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}
