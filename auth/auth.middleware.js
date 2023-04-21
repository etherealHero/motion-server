import jwt from "jsonwebtoken"
import * as dotenv from "dotenv" // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

export default function (req, res, next) {
  if (req.method === "OPTIONS") {
    next()
  }

  try {
    const token = req.headers.authorization.split(" ")[1]
    if (!token) {
      return res.status(400).json({ message: "Пользователь не авторизован" })
    }
    const decodedData = jwt.verify(token, process.env.JWT_SECRET)

    req.user = decodedData
    next()
  } catch (e) {
    console.log(e)
    res.status(400).json({ message: "Пользователь не авторизован" })
  }
}
