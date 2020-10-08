const express = require("express");
const router = express.Router();
const Estado = require("../database/models/Estado");

// INDEX /api/carreras
router.get("/", (req, res) => {
  try {
    Estado.findAll().then((estado) => {
      res.json(estado);
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
