import { gql } from 'apollo-server-express'

import establishmentTypeDefs from './establishmentTypeDefs.js'
import userTypeDefs from './userTypeDefs.js'
import profileTypeDefs from './profileTypeDefs.js'
import profileTypeTypeDefs from './profileTypeTypeDefs.js'
import clientTypeDefs from './clientTypeDefs.js'
import siteTypeDefs from './siteTypeDefs.js'

const types = gql`
    scalar Date
    type Query {
        _: String
    }

    type Mutation {
        _: String
    }
`

export const typeDefs = [
    types,
    establishmentTypeDefs,
    userTypeDefs,
    profileTypeDefs,
    profileTypeTypeDefs,
    clientTypeDefs,
    siteTypeDefs
]
