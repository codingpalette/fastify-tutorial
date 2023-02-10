import { SwaggerOptions } from '@fastify/swagger'

export const swaggerConfig: SwaggerOptions = {

  routePrefix: '/docs',
  openapi: {
    info: {
      title: 'fastify',
      description: 'Fastify API documentation',
      version: '0.1.0',
    },
    tags: [
      // { name: 'user', description: 'User related end-points' },
      // { name: 'code', description: 'Code related end-points' },
    ],
  },
  uiConfig: {
    docExpansion: 'full',
    deepLinking: false,
  },
  uiHooks: {
    onRequest: function (request, reply, next) {
      next()
    },
    preHandler: function (request, reply, next) {
      next()
    },
  },
  staticCSP: true,
  transformStaticCSP: (header) => header,
  exposeRoute: true,

}