import { Router } from "express";
const router = Router();
import { getSeguimientos } from "../controllers/seguimientosController";

router.get("/", getSeguimientos);

export default router;
