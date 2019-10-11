import { Server } from './src/server.ts'

const server = new Server()
server.initMiddle()
server.start(8000)
