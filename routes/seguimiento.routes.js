const express = require("express");
const Categoria = require("../database/models/Categoria");
const router = express.Router();
const Entrevista = require("../database/models/Entrevista");
const Estado = require("../database/models/Estado");
const Orientador = require("../database/models/Orientador");
const Persona = require("../database/models/Persona");
const Seguimiento = require("../database/models/Seguimiento");
const Derivador = require("../database/models/Derivador");
const TipoSeguimiento = require("../database/models/TipoSeguimiento");

// INDEX /api/seguimientos
router.get("/", (req, res) => {
  try {
    Seguimiento.findAll({
      include: [
        {
          model: Estado,
          as: "estados",
          attributes: ["estado_tipo"],
        },
        {
          model: Entrevista,
          as: "entrevistas",
          attributes: ["entrevista_observaciones", "entrevista_acciones"],
        },
        {
          model: Categoria,
          as: "categorias",
          attributes: ["categoria_tipo"],
        },
        {
          model: TipoSeguimiento,
          as: "tiposSeguimiento",
          attributes: ["tipo_seguimiento_tipo"],
        },
        {
          model: Persona,
          as: "personas",
          attributes: [
            "persona_nombre",
            "persona_celular",
            "persona_tel_particular",
            "persona_email",
          ],
        },
        {
          model: Orientador,
          as: "orientadores",
          attributes: ["orientador_nombre", "orientador_email"],
        },
        {
          model: Derivador,
          as: "derivadores",
          attributes: ["derivador_nombre"],
        },
      ],
    }).then((seguimiento) => {
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
