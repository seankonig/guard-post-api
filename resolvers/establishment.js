import { establishments } from '../constants/index.js'

const establishmentResolver = {
    Query: {
        establishments: () => establishments,
        establishment: (_, { id }) => establishments.find((est) => est.id === id)
    }
}

export default establishmentResolver
