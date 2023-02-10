import db from "../lib/db.js";


interface AuthParas {
  username: string
  password: string
}

const userService = {
  async register({username, password}: AuthParas) {
    const user = db.user.create({
      data: {
        username,
        passwordHash: password
      }
    })

    return user
  },

  async login() {
    return 'login'
  }
}

export default userService