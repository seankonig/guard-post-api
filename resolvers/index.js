import { GraphQLDateTime } from 'graphql-iso-date'

import establishmentResolver from './establishment.js'
import userResolver from './user.js'
import profileResolver from './profile.js'
import profileTypesResolver from './profileTypeResolver.js'

const customDateTimeScalarResolver = {
    Date: GraphQLDateTime
}

export const resolvers = [
    establishmentResolver,
    userResolver,
    profileResolver,
    profileTypesResolver,
    customDateTimeScalarResolver
]
