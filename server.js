import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'
import cors from 'cors'
import dotEnv from 'dotenv'
import DataLoader from 'dataloader'

import { connection } from './database/util/index.js'

import { typeDefs } from './typeDefs/index.js'
import { resolvers } from './resolvers/index.js'

import { verifyUser } from './services/authService.js'

import loaders from './loaders/index.js'

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
    resolvers,
    context: async ({ req }) => {
        await verifyUser(req)
        return {
            userId: req.userId,
            loaders: {
                profile: new DataLoader((keys) => loaders.profiles.batchProfiles(keys)),
                client: new DataLoader((keys) => loaders.client.batchSites(keys))
            }
        }
    }
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
