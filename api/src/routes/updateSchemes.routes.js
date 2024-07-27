import { Router } from "express";
import { addNewScheme, updateScheme } from "../controllers/admin.controllers.js";

const router = Router()

router.get("/add-scheme",addNewScheme)
router.post("/update-scheme",updateScheme)

export default router