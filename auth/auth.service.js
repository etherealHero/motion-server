import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"

import User from "../user/user.model.js"

const generateAccessToken = (id) => {
  const payload = {
    id,
  }

  return jwt.sign(payload, process.env.JWT_SECRET, {
    // expiresIn: "24h",
  })
}

class AuthService {
  async registration({ username, password }) {
    const candidate = await User.findOne({ username })

    if (candidate) throw new Error("Username is taken")

    const hashPassword = await bcryptjs.hash(password, 7)

    await User.create({
      username,
      password: hashPassword,
    })

    return "User created successfully"
  }

  async login({ username, password }) {
    const user = await User.findOne({ username })
    if (!user) throw new Error(`Username '${username}' not found`)

    const validPassword = await bcryptjs.compare(password, user.password)
    if (!validPassword) {
      message: `Incorrect password`
    }

    const token = generateAccessToken(user._id)

    return { token }
  }
}

export default new AuthService()
