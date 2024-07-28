import { Router } from "express";
import { matchSchemes } from "../controllers/scheme.controllers.js";

const router = Router()

router.get("/find-schemes/:id",matchSchemes)

export default router