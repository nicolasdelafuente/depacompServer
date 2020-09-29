import Sequelize from "sequelize";
import { sequelize } from "../database/database";

import Seguimientos from "./Seguimientos";

const Entrevistas = sequelize.define(
  "entrevistas",
  {
    entrevista_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    seguimiento_id: {
      type: Sequelize.INTEGER,
    },
    entrevista_fecha_hora: {
      type: Sequelize.DATE,
    },
    entrevista_observaciones: {
      type: Sequelize.TEXT,
    },
    entrevista_acciones: {
      type: Sequelize.TEXT,
    },
  },
  { timestamps: false }
);

Entrevistas.hasMany(Seguimientos, {
  foreingKey: "entrevista_id",
  sourceKey: "entrevista_id",
});
Seguimientos.belongsTo(Entrevistas, {
  foreingKey: "entrevista_id",
  sourceKey: "entrevista_id",
});

export default Entrevistas;
