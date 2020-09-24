import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const Orientadores = sequelize.define(
  "orientadores",
  {
    orientador_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    orientador_nombre: {
      type: Sequelize.TEXT,
    },
    orientador_email: {
      type: Sequelize.TEXT,
    },
    orientador_password: {
      type: Sequelize.TEXT,
    },
  },
  { timestamps: false }
);

export default Orientadores;
