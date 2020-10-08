const express = require("express");
const router = express.Router();
const Orientador = require("../database/models/Orientador");

// INDEX /api/orientadores
router.get("/", (req, res) => {
  try {
    Orientador.findAll().then((orientador) => {
      res.json(orientador);
    });
  } catch (error) {
    console.log(error);
  }
});

// READ /api/orientadores/:id
router.get("/:id", (req, res) => {
  try {
    Orientador.findByPk(req.params.id).then((orientador) => {
      res.json(orientador);
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
