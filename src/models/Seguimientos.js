import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const Seguimientos = sequelize.define(
  "seguimientos",
  {
    seguimiento_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    estado_id: {
      type: Sequelize.INTEGER,
    },
    entrevista_id: {
      type: Sequelize.INTEGER,
    },
    categoria_id: {
      type: Sequelize.INTEGER,
    },
    tipo_seguimiento_id: {
      type: Sequelize.INTEGER,
    },
    persona_id: {
      type: Sequelize.INTEGER,
    },
    orientador_id: {
      type: Sequelize.INTEGER,
    },
    derivador_id: {
      type: Sequelize.INTEGER,
    },
    seguimiento_motivo: {
      type: Sequelize.TEXT,
    },
  },
  { timestamps: false }
);

export default Seguimientos;
