import { Router } from "express";
import { registerUser } from "../controllers/user.controllers.js";

const router = Router()

router.post("/register-user",registerUser)
router.put("/update-user",)
export default router