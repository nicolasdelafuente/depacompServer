const express = require("express");
const router = express.Router();
const Estado = require("../database/models/Estado");

// INDEX /api/estados
router.get("/", (req, res) => {
  try {
    Estado.findAll().then((estado) => {
      res.json(estado);
    });
  } catch (error) {
    console.log(error);
  }
});

// READ /api/estados/:id
router.get("/:id", (req, res) => {
  try {
    Estado.findByPk(req.params.id).then((estado) => {
      res.json(estado);
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
