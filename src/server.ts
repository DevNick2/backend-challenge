import { build } from "./app"

const server = build()

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