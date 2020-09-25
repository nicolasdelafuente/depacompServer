import { Router } from "express";
const router = Router();
import { getCarreras, createCarreras } from "../controllers/carrerasController";

router.get("/", getCarreras);
router.post("/", createCarreras);

export default router;
