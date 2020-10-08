const express = require("express");
const router = express.Router();
const Seguimiento = require("../database/models/Seguimiento");

// INDEX /api/seguimientos
router.get("/", (req, res) => {
  try {
    Seguimiento.findAll().then((seguimiento) => {
      res.json(seguimiento);
    });
  } catch (error) {
    console.log(error);
  }
});

// READ /api/sectores_derivacion/:id
router.get("/:id", (req, res) => {
  try {
    Seguimiento.findByPk(req.params.id).then((seguimiento) => {
      res.json(seguimiento);
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
