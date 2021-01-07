import { gql } from 'apollo-server-express'

import establishmentTypeDefs from './establishmentTypeDefs.js'
import userTypeDefs from './userTypeDefs.js'
import profileTypeDefs from './profileTypeDefs.js'

const types = gql`
    type Query {
        _: String
    }

    type Mutation {
        _: String
    }
`

export const typeDefs = [types, establishmentTypeDefs, userTypeDefs, profileTypeDefs]
