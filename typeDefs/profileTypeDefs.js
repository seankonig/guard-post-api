import { gql } from 'apollo-server-express'

const profileTypeDefs = gql`
    extend type Query {
        profile(id: ID!): Profile
        establishmentProfiles(id: ID!): [Profile] #establishmentID
    }

    input udpateProfileInput {
        firstName: String!
        lastName: String!
        email: String!
        birthDate: String
        userId: String!
    }

    input createProfile {
        firstName: String!
        lastName: String!
        email: String
        birthDate: String
        establishmentId: String!
    }

    extend type Mutation {
        createProfile(input: createProfile!): Profile
        updateProfile(input: udpateProfileInput!): Profile
    }

    type Profile {
        id: ID!
        firstName: String!
        lastName: String!
        email: String
        birthDate: String
        establishment: Establishment!
        user: User
    }
`

export default profileTypeDefs
