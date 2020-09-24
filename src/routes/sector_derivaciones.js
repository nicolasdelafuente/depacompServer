import { Router } from "express";
const router = Router();
import { getSector_derivaciones } from "../controllers/sector_derivacionesController";

router.get("/", getSector_derivaciones);

export default router;
