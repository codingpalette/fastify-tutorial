import {FastifyPluginAsync, errorCodes} from "fastify";
import userService from "../../../services/UserService.js";
import {registerSchema} from "./schema.js";
import {AuthBody} from "./types.js";


const authRouter: FastifyPluginAsync = async (fastify) => {

  fastify.post('/login', {
    schema: {
      tags: ['user']
    }
  }, async () => {
    return userService.login()
  })

  fastify.post<{Body: AuthBody}>('/register', {
    schema: registerSchema

  }, async (fastify, reply) => {

    // reply.status(500).send({ ok: false })

    const user_info = await userService.register(fastify.body)
    console.log('user_info', user_info)


    reply.status(200).send(user_info)

  })
}

export default authRouter;