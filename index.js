import express from "express"
import mongoose from "mongoose"

import categoryRouter from "./category/category.router.js"
import todoRouter from "./todo/todo.router.js"
import authRouter from "./auth/auth.router.js"

import * as dotenv from "dotenv" // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

const PORT = process.env.PORT || 4001
const DB_URL = process.env.DB_URL

const app = express()

app.use(express.json())
// app.use(express.static("static"))
app.use("/api/auth", authRouter)
app.use("/api", todoRouter)
app.use("/api", categoryRouter)

const start = async () => {
  try {
    await mongoose.connect(DB_URL)
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
  } catch (e) {
    console.log(e)
  }
}

start()
