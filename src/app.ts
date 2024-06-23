import Fastify, { FastifyInstance } from 'fastify'

import { handler as handlerUsers } from './controllers/UserController'

// XXX TODO :: Adicionar um middleware para verificar a autorização (JWT)
// XXX TODO :: Implementar uma rota de login publica
export function build (options = {}): FastifyInstance {
  const server: FastifyInstance = Fastify(options)

  server.get('/users', handlerUsers)

  return server
}