const express = require("express");
const router = express.Router();
const TipoDocumento = require("../database/models/TipoDocumento");

// INDEX /api/tipos_documento
router.get("/", (req, res) => {
  try {
    TipoDocumento.findAll().then((tipoDocumento) => {
      res.json(tipoDocumento);
    });
  } catch (error) {
    console.log(error);
  }
});

// READ /api/tipos_documento/:id
router.get("/:id", (req, res) => {
  try {
    TipoDocumento.findByPk(req.params.id).then((tipoDocumento) => {
      res.json(tipoDocumento);
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
