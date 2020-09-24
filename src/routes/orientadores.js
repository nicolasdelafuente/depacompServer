import { Router } from "express";
const router = Router();
import { getOrientadores } from "../controllers/orientadoresController";

router.get("/", getOrientadores);

export default router;
