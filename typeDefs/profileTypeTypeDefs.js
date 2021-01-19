import { gql } from 'apollo-server-express'

const profileTypeTypeDefs = gql`
    extend type Query {
        profileTypes: [ProfileType!]!
    }

    input createProfileType {
        type: String!
    }

    extend type Mutation {
        createProfileType(input: createProfileType!): ProfileType
    }

    type ProfileType {
        id: ID!
        type: String!
    }
`

export default profileTypeTypeDefs
