import { Router } from "express";
const router = Router();
import { getPersonas } from "../controllers/personasController";

router.get("/", getPersonas);

export default router;
