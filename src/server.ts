import { build } from "./app"
import Logger from './winston'

const server = build()

const start = async () => {
  try {
    await server.listen({ port: process.env.PORT })

    Logger.info('server running')
  } catch (err) {
    server.log.error(err)
    Logger.error('server error: ' + err)

    process.exit(1)
  }
}

start()