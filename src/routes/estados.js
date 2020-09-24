import { Router } from "express";
const router = Router();
import { getEstados } from "../controllers/estadosController";

router.get("/", getEstados);

export default router;
