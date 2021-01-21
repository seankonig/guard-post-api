import { gql } from 'apollo-server-express'

const siteTypeDefs = gql`
    extend type Query {
        sites(clientId: ID!): [Site]
        site(id: ID!): Site
    }

    input createSite {
        name: String!
        number: String!
        description: String!
        lat: String!
        lng: String!
        clientId: String!
    }

    input updateSite {
        id: ID!
        name: String!
        number: String!
        description: String!
        lat: String!
        lng: String!
    }

    extend type Mutation {
        createSite(input: createSite!): Site
        updateSite(input: updateSite!): Site
    }

    type Site {
        id: ID!
        name: String!
        number: String!
        description: String
        lat: String!
        lng: String!
        client: Client
        createdAt: Date!
    }
`

export default siteTypeDefs
