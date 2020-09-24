import { Router } from "express";
const router = Router();
import { getEntrevistas } from "../controllers/entrevistasController";

router.get("/", getEntrevistas);

export default router;
