const express = require("express");
const router = express.Router();
const TipoSeguimiento = require("../database/models/TipoSeguimiento");

// INDEX /api/tipos_seguimiento
router.get("/", (req, res) => {
  try {
    TipoSeguimiento.findAll().then((tipoSeguimiento) => {
      res.json(tipoSeguimiento);
    });
  } catch (error) {
    console.log(error);
  }
});

// READ /api/tipos_seguimiento/:id
router.get("/:id", (req, res) => {
  try {
    TipoSeguimiento.findByPk(req.params.id).then((tipoSeguimiento) => {
      res.json(tipoSeguimiento);
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
