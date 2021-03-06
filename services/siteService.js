import Site from '../database/models/Site.js'
import Client from '../database/models/Client.js'

export const fetchAllSites = async (clientId) => {
    try {
        const sites = Site.find({ client: clientId })

        if (sites) {
            return sites
        }
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

export const fetchSite = async (id) => {
    try {
        const site = await Site.findById(id)

        if (site) {
            return site
        }
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

export const createSite = async (input) => {
    try {
        const site = new Site({
            ...input,
            client: input.clientId
        })

        const result = await site.save()

        const client = await Client.findById(result.client)

        client.sites.push(result.id)
        await client.save()

        return result
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

export const updateSite = async (input) => {
    try {
        const site = await Site.findByIdAndUpdate(
            input.id,
            {
                name: input.name,
                number: input.number,
                description: input.description,
                lat: input.lat,
                lng: input.lng
            },
            { new: true }
        )

        return site
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}
