import { Router } from "express";
const router = Router();
import { getTipos_seguimientos } from "../controllers/tipos_seguimientosController";

router.get("/", getTipos_seguimientos);

export default router;
