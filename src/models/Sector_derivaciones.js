import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const Sector_derivaciones = sequelize.define(
  "sectorderivaciones",
  {
    sector_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    sector_nombre: {
      type: Sequelize.TEXT,
    },
  },
  { timestamps: false }
);

export default Sector_derivaciones;
