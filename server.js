import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'
import cors from 'cors'
import dotEnv from 'dotenv'

import { connection } from './database/util/index.js'

import { typeDefs } from './typeDefs/index.js'
import { resolvers } from './resolvers/index.js'

dotEnv.config()

const app = express()

//databse connection
connection()

//middleware
//body parser
app.use(express.json())
//cors
app.use(cors())

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
