import Site from '../database/models/Site.js'

const batchSites = async (clients) => {
    const sites = await Site.find({})
    // const result = clients.map((client) => sites.find((site) => client._id.equals(site.client)))
    // console.log(result)
    return result
}

const client = {
    batchSites
}

export default client
