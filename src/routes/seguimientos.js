import { Router } from "express";
import {
  createSeguimiento,
  getSeguimientos,
  getSeguimiento,
  deleteSeguimiento,
  updateSeguimiento,
} from "../controllers/seguimiento.controller";

const router = Router();

// api/seguimientos/
router.get("/", getSeguimientos);
router.post("/", createSeguimiento);

//api/seguimientos/seguimientoId
router.get("/:id", getSeguimiento);
router.delete("/:id", deleteSeguimiento);
router.put("/:id", updateSeguimiento);

export default router;
