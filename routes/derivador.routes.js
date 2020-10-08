const express = require("express");
const router = express.Router();
const Derivador = require("../database/models/Derivador");

// INDEX /api/derivadores
router.get("/", (req, res) => {
  try {
    Derivador.findAll().then((derivador) => {
      res.json(derivador);
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
