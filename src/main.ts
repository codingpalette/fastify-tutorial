import Fastify, { FastifyInstance, RouteShorthandOptions } from 'fastify'
import fastifySwagger from '@fastify/swagger'
import fastifyCookie from '@fastify/cookie'
import { swaggerConfig } from './config/swagger.js'
import cors from '@fastify/cors'
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'
import routes from "./routes/index.js";


// pino-pretty 는 fastify 로그 이쁘게 보여주기

const server = Fastify({
  logger: true,
}).withTypeProvider<TypeBoxTypeProvider>()

if (process.env.NODE_ENV === 'development') {
  server.register(cors, {
    origin: /localhost/,
    allowedHeaders: ['Cookie', 'Content-Type'],
    credentials: true,
  })
} else {
  server.register(cors, {
    origin: /veltrends.com/,
    allowedHeaders: ['Cookie', 'Content-Type'],
    credentials: true,
  })
}

if (process.env.NODE_ENV !== 'production') {
  await server.register(fastifySwagger, swaggerConfig)
}

server.get('/', async () => {
  return 'True'
})

server.get('/ping', async () => {
  return 'Tru111e112'
})

server.register(routes)


server.listen({ port: 4000 })