const express = require("express");
const router = express.Router();
const Persona = require("../database/models/Persona");

// INDEX /api/derivadores
router.get("/", (req, res) => {
  try {
    Persona.findAll().then((persona) => {
      res.json(persona);
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
