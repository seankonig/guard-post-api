import { gql } from 'apollo-server-express'

const clientTypeDefs = gql`
    extend type Query {
        clients: [Client]
        client(id: ID!): Client
    }

    input createClient {
        name: String!
        email: String!
        establishmentId: String!
    }

    extend type Mutation {
        createClient(input: createClient!): Client
    }

    type Client {
        id: ID!
        name: String!
        email: String!
        sites: [Site]
        createdAt: Date!
        updatedAt: Date!
    }
`

export default clientTypeDefs
