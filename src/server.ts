import Fastify, { FastifyInstance } from 'fastify'
import { ServerResponse } from 'http'

const server: FastifyInstance = Fastify({})

server.get('/users', async (request, reply): Promise<ServerResponse> => {
  const users = await fetch(process.env.API_URL)
  
  return reply
    .code(200)
    .header('Content-Type', 'application/json; charset=utf-8')
    .send(await users.json())
})

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