import { gql } from 'apollo-server-express'

const establishmentTypeDefs = gql`
    extend type Query {
        establishments: [Establishment]
        establishment(id: ID!): Establishment
    }

    type Establishment {
        id: ID!
        name: String!
    }
`

export default establishmentTypeDefs
