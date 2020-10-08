const express = require("express");
const router = express.Router();
const Categoria = require("../database/models/Categoria");

// INDEX /api/categorias
router.get("/", (req, res) => {
  try {
    Categoria.findAll().then((categoria) => {
      res.json(categoria);
    });
  } catch (error) {
    console.log(error);
  }
});

// READ /api/categorias/:id
router.get("/:id", (req, res) => {
  try {
    Categoria.findByPk(req.params.id).then((categoria) => {
      res.json(categoria);
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
