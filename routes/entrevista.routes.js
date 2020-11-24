const express = require("express");
const router = express.Router();
const Entrevista = require("../database/models/Entrevista");
const Seguimiento = require("../database/models/Seguimiento");
const Persona = require("../database/models/Persona");
const TipoSeguimiento = require("../database/models/TipoSeguimiento");
const Estado = require("../database/models/Estado");
const Orientador = require("../database/models/Orientador");
const Categoria = require("../database/models/Categoria");


// INDEX /api/entrevistas
// router.get("/", (req, res) => {
//   try {
//     Entrevista.findAll().then((entrevista) => {
//       res.json(entrevista);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// });

router.get("/", (req, res) => {
  try {
    Entrevista.findAll({
      include: [
        {
          model: Seguimiento,
          as: "seguimiento",
          attributes: ["seguimiento_id"],
        },
        {
          model: Entrevista,
          as: "entrevistas",
          attributes: ["entrvista_fecha_hora", "entrevista_observaciones",
          "entrevista_acciones"],
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
          model: Categoria,
          as: "categorias",
          attributes: ["categoria_tipo"],
        },
        {
          model: Estado,
          as: "estados",
          attributes: ["estado_tipo", "color"],
        },
        {
          model: Orientador,
          as: "orientadores",
          attributes: ["orientador_nombre", "orientador_email"],
        },
      ],
    }).then((entrevista) => {
      res.json(entrevista);
    });
  } catch (error) {
    console.log(error);
  }
});


// READ /api/entrevistas/:id
router.get("/:id", (req, res) => {
  try {
    Entrevista.findByPk(req.params.id).then((entrevista) => {
      res.json(entrevista);
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
