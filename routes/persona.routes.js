const express = require("express");
const router = express.Router();
const Persona = require("../database/models/Persona");

// INDEX /api/personas
router.get("/", (req, res) => {
  try {
    Persona.findAll().then((persona) => {
      res.json(persona);
    });
  } catch (error) {
    console.log(error);
  }
});

// READ /api/personas/:id
router.get("/:id", (req, res) => {
  try {
    Persona.findByPk(req.params.id).then((personas) => {
      res.json(personas);
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
