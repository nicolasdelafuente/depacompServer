import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const Personas = sequelize.define(
  "personas",
  {
    persona_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    carrera_id: {
      type: Sequelize.INTEGER,
    },
    persona_documento: {
      type: Sequelize.INTEGER,
    },
    documento_id: {
      type: Sequelize.INTEGER,
    },
    persona_nombre: {
      type: Sequelize.TEXT,
    },
    persona_celular: {
      type: Sequelize.TEXT,
    },
    persona_tel_particular: {
      type: Sequelize.TEXT,
    },
    persona_email: {
      type: Sequelize.TEXT,
    },
  },
  { timestamps: false }
);

export default Personas;
