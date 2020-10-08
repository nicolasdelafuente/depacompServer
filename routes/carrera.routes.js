const express = require("express");
const router = express.Router();
const Carrera = require("../database/models/Carrera");

// INDEX /api/carreras
router.get("/", (req, res) => {
  try {
    Carrera.findAll().then((carrera) => {
      res.json(carrera);
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
