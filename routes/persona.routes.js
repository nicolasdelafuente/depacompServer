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

// MODIFY /api/personas/:id
router.put("/:id", (req, res) => {
  Persona.update({
    carrera_id: req.params.carrera_id,
    persona_documento: req.params.persona_documento,
    documento_id: req.params.documento_id,
    persona_nombre: req.body.persona_nombre,
    persona_celular: req.body.persona_celular,
    persona_tel_particular: req.params.persona_tel_particular, 
    persona_email: req.params.persona_email
    }, {
      where: {
        persona_id: req.params.id
      }
    }).then(result => {
      res.json("Id = " + req.params.id + " fue modificado con exito");
    });
});


module.exports = router;
