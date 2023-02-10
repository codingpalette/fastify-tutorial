import {FastifyPluginAsync} from "fastify";
import authRouter from "./auth/index.js";


const api: FastifyPluginAsync = async (fastify) => {
  fastify.get('/test', async () => {
    return '안녕!!'
  })

  fastify.register(authRouter, {prefix: '/auth'})
}

export default api