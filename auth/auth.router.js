import { Router } from "express"
import { check } from "express-validator"
import AuthController from "./auth.controller.js"

const router = Router()

router.post(
  "/registration",
  [
    check("username", "Имя пользователя слишком короткое")
      .notEmpty()
      .isLength({ min: 2 }),
    check(
      "password",
      "Пароль должен быть больше 4 и меньше 10 символов"
    ).isLength({ min: 4, max: 10 }),
  ],
  AuthController.registration
)
router.post("/login", AuthController.login)

export default router
