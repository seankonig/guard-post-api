import { gql } from 'apollo-server-express'

const profileTypeDefs = gql`
    extend type Query {
        profile: Profile
    }

    input createProfileInput {
        firstName: String!
        lastName: String!
        email: String!
        birthDate: String
        userID: String!
    }

    extend type Mutation {
        createProfile(input: createProfileInput!): Profile
    }

    type Profile {
        id: ID!
        firstName: String!
        lastName: String!
        email: String!
        birthDate: String!
        establishment: Establishment
        user: User
    }
`

export default profileTypeDefs
