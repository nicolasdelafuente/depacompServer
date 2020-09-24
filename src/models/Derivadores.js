import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const Derivadores = sequelize.define(
  "derivadores",
  {
    derivador_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    sector_id: {
      type: Sequelize.INTEGER,
    },
    derivador_nombre: {
      type: Sequelize.TEXT,
    },
  },
  { timestamps: false }
);

export default Derivadores;
