const express = require("express");
const router = express.Router();
const Seguimiento = require("../database/models/Seguimiento");

// INDEX /api/categorias
router.get("/", (req, res) => {
  try {
    Seguimiento.findAll().then((seguimiento) => {
      res.json(seguimiento);
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
