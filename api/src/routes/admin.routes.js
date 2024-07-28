import { Router } from "express";
import { fetchUsers, fwlWorkers, validateFWL } from "../controllers/admin.controllers.js";


const router = Router()

router.get("/fetch-users",fetchUsers)
router.get("/fetch-fwl",fwlWorkers)
router.post("/validate-fwl",validateFWL)

export default router