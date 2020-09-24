import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const Estados = sequelize.define(
  "estados",
  {
    estado_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    estado_tipo: {
      type: Sequelize.TEXT,
    },
    color: {
      type: Sequelize.TEXT,
    },
  },
  { timestamps: false }
);

export default Estados;
