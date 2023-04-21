import { validationResult } from "express-validator"

import AuthService from "./auth.service.js"

import * as dotenv from "dotenv"
dotenv.config()

class AuthController {
  async registration(req, res) {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) return res.status(400).json(errors)

      const data = await AuthService.registration(req.body)

      res.json(data)
    } catch (e) {
      res.status(400).json(e.message)
    }
  }

  async login(req, res) {
    try {
      const data = await AuthService.login(req.body)

      res.json(data)
    } catch (e) {
      res.status(400).json(e.message)
    }
  }
}

export default new AuthController()
