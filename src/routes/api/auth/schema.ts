import {FastifySchema} from "fastify";


export const registerSchema: FastifySchema = {
  tags: ['user'],
  body: {
    type: 'object',
    properties: {
      username: {type: 'string'},
      password: {type: 'string'}
    }
  }
}