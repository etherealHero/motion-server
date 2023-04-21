import { Router } from "express"
import authMiddleware from "../auth/auth.middleware.js"
import CategoryController from "./category.controller.js"

const router = Router()

router.post("/category", authMiddleware, CategoryController.create)
router.get("/category", authMiddleware, CategoryController.getAll)
// router.get("/category/:id", CategoryController.getOne)
router.put("/category", authMiddleware, CategoryController.update)
router.delete("/category/:id", authMiddleware, CategoryController.delete)

export default router
