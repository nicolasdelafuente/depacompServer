import { Router } from "express";
const router = Router();
import { getTipos_documentos } from "../controllers/tipos_documentosController";

router.get("/", getTipos_documentos);

export default router;
