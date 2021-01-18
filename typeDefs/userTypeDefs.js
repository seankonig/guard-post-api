import { gql } from 'apollo-server-express'

const userTypeDefs = gql`
    extend type Query {
        users: [User]
        user(id: ID!): User
        me: User
        loggedInUser: User
    }

    input signUpInput {
        username: String!
        password: String!
    }

    input loginInput {
        username: String!
        password: String!
    }

    extend type Mutation {
        signUp(input: signUpInput): User
        login(input: loginInput): Token
    }

    type Token {
        token: String!
    }

    type User {
        id: ID!
        username: String!
        password: String!
        profile: Profile
        createdAt: Date!
        updatedAt: Date!
    }
`

export default userTypeDefs
