const express = require("express");
const router = express.Router();
const SectorDerivacion = require("../database/models/SectorDerivacion");

// INDEX /api/sectores_derivacion
router.get("/", (req, res) => {
  try {
    SectorDerivacion.findAll().then((sectorDerivacion) => {
      res.json(sectorDerivacion);
    });
  } catch (error) {
    console.log(error);
  }
});

// READ /api/sectores_derivacion/:id
router.get("/:id", (req, res) => {
  try {
    SectorDerivacion.findByPk(req.params.id).then((sectorDerivacion) => {
      res.json(sectorDerivacion);
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
