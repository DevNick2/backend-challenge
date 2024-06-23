import Fastify, { FastifyInstance } from 'fastify'

import { handler as handlerUsers } from './controllers/UserController'

export function build (options = {}) {
  const server: FastifyInstance = Fastify(options)
  
  server.get('/users', handlerUsers)

  return server
}