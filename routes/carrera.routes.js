const express = require("express");
const router = express.Router();
const Carrera = require("../database/models/Carrera");

// INDEX /api/carreras
router.get("/", (req, res) => {
  try {
    Carrera.findAll().then((carrera) => {
      res.json(carrera);
    });
  } catch (error) {} // res.status(400).json({ message: "Error al obtener la información solicitada"} )
});
//    try {
/* ... acción ... */
//} catch (err) {
//handleError(err, req, res)
//}

// READ /api/carreras/:id
router.get("/:id", (req, res) => {
  try {
    Carrera.findByPk(req.params.id).then((carrera) => {
      res.json(carrera);
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
