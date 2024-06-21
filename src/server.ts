import Fastify, { FastifyInstance } from 'fastify'
import { getUsers } from './controllers/UserController'

const server: FastifyInstance = Fastify({})

server.get('/users', getUsers)

const start = async () => {
  try {
    await server.listen({ port: process.env.PORT })

    console.log('server running')
  } catch (err) {
    server.log.error(err)

    process.exit(1)
  }
}

start()