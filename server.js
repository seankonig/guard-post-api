import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'
import cors from 'cors'
import dotEnv from 'dotenv'

dotEnv.config()

const app = express()

//middleware
//body parser
app.use(express.json())
//cors
app.use(cors())

const typeDefs = gql`
    type Query {
        greetings: String
    }

    type User {
        id: ID!
        username: String!
        email: String!
        company: Company
    }

    type Company {
        id: ID!
        name: String!
        user: User
    }

    type Form {
        id: ID!
        name: String!
    }
`

const resolvers = {
    Query: {
        greetings: () => {
            return 'hallo'
        }
    }
}

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers
})

apolloServer.applyMiddleware({ app, path: '/graphql' })

//middleware

//Port
const PORT = process.env.PORT

//test connection
// app.use('/', (req, res, next) => {
//     res.send({ message: 'Hi dudes' })
// })

app.listen(PORT, () =>
    console.log(`express is running on ${PORT} and graphql playground is available on ${apolloServer.graphqlPath}`)
)
