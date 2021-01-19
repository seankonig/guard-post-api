import { GraphQLDateTime } from 'graphql-iso-date'

import establishmentResolver from './establishment.js'
import userResolver from './user.js'
import profileResolver from './profile.js'
import profileTypesResolver from './profileTypeResolver.js'
import clientResolver from './clientResolver.js'
import sitesResolver from './sitesResolver.js'

const customDateTimeScalarResolver = {
    Date: GraphQLDateTime
}

export const resolvers = [
    establishmentResolver,
    userResolver,
    profileResolver,
    profileTypesResolver,
    clientResolver,
    sitesResolver,
    customDateTimeScalarResolver
]
