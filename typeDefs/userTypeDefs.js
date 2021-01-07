import { gql } from 'apollo-server-express'

const userTypeDefs = gql`
    extend type Query {
        users: [User]
        user(id: ID!): User
    }

    input signUpInput {
        username: String!
        password: String!
    }

    extend type Mutation {
        signUp(input: signUpInput!): User
    }

    type User {
        id: ID!
        username: String!
        password: String!
        profile: Profile
    }
`

export default userTypeDefs
