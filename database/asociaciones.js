const Carrera = require("./models/Carrera");
const Categoria = require("./models/Categoria");
const Derivador = require("./models/Derivador");
const Entrevista = require("./models/Entrevista");
const Estado = require("./models/Estado");
const Orientador = require("./models/Orientador");
const Persona = require("./models/Persona");
const SectorDerivacion = require("./models/SectorDerivacion");
const Seguimiento = require("./models/Seguimiento");
const TipoDocumento = require("./models/TipoDocumento");
const TipoSeguimiento = require("./models/TipoSeguimiento");

Seguimiento.hasOne(Estado, {
  as: "estados",
  foreignKey: "estado_id",
  sourceKey: "estado_id",
});

Seguimiento.hasOne(Categoria, {
  as: "categorias",
  foreignKey: "categoria_id",
  sourceKey: "categoria_id",
});

Seguimiento.hasOne(TipoSeguimiento, {
  as: "tiposSeguimiento",
  foreignKey: "tipo_seguimiento_id",
  sourceKey: "tipo_seguimiento_id",
});

Seguimiento.hasOne(Persona, {
  as: "personas",
  foreignKey: "persona_id",
  sourceKey: "persona_id",
});

Seguimiento.hasOne(Orientador, {
  as: "orientadores",
  foreignKey: "orientador_id",
  sourceKey: "orientador_id",
});

Seguimiento.hasOne(Derivador, {
  as: "derivadores",
  foreignKey: "derivador_id",
  sourceKey: "derivador_id",
});

//1 a N
// un seguimiento va a tener muchos entrevistas.
Seguimiento.hasMany(Entrevista, {
  as: "entrevistas",
  foreignKey: "entrevista_id",
  sourceKey: "entrevista_id",
});
Entrevista.belongsTo(Seguimiento);

// un seguimiento va a tener un estado.

//N a N
