const express = require("express");
const router = express.Router();
const Orientador = require("../database/models/Orientador");

// INDEX /api/categorias
router.get("/", (req, res) => {
  try {
    Orientador.findAll().then((orientador) => {
      res.json(orientador);
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
