import { Router } from "express"
import authMiddleware from "../auth/auth.middleware.js"
import TodoController from "./todo.controller.js"

const router = Router()

router.post("/todo", authMiddleware, TodoController.create)
router.get("/todo", authMiddleware, TodoController.getAll)
// router.get("/todo/:id", authMiddleware, TodoController.getOne)
router.put("/todo", authMiddleware, TodoController.update)
router.delete("/todo/:id", authMiddleware, TodoController.delete)

export default router
