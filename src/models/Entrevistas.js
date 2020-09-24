import Sequelize from "sequelize";
import { sequelize } from "../database/database";

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

export default Entrevistas;
