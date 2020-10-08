const express = require("express");
const router = express.Router();
const Entrevista = require("../database/models/Entrevista");

// INDEX /api/entrevistas
router.get("/", (req, res) => {
  try {
    Entrevista.findAll().then((entrevista) => {
      res.json(entrevista);
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
