import { Router } from "express";
import { createWorker, loginWorker, logoutWorker, register, updateUser } from "../controllers/worker.controllers.js";

const router = Router()

router.post("/register-worker",createWorker)
router.post("/login-worker",loginWorker)
router.get("/logout-worker",logoutWorker)
router.post("/fwl-register/:id",register)
router.put("/update-user",updateUser)

export default router