import { Router } from "express";
const router = Router();
import { getDerivadores } from "../controllers/derivadoresController";

router.get("/", getDerivadores);

export default router;
