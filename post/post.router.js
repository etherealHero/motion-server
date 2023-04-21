import { Router } from "express"
import authMiddleware from "../auth/auth.middleware.js"
import PostController from "./post.controller.js"

const router = Router()

router.post("/posts", PostController.create)
router.get("/posts", authMiddleware, PostController.getAll)
router.get("/posts/:id", PostController.getOne)
router.put("/posts", PostController.update)
router.delete("/posts/:id", PostController.delete)

export default router
