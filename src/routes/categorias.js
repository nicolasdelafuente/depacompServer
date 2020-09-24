import { Router } from "express";
const router = Router();
import { getCategorias } from "../controllers/categoriasController";

router.get("/", getCategorias);

export default router;
