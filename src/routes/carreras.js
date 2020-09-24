import { Router } from "express";
const router = Router();
import { getCarreras } from "../controllers/carrerasController";

router.get("/", getCarreras);

export default router;
