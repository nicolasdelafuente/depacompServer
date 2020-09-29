import Sequelize from "sequelize";
import { sequelize } from "../database/database";

import Derivadores from "./Derivadores";

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

Sector_derivaciones.hasMany(Derivadores, {
  foreingKey: "sector_id",
  sourceKey: "sector_id",
});
Derivadores.belongsTo(Sector_derivaciones, {
  foreingKey: "sector_id",
  sourceKey: "sector_id",
});

export default Sector_derivaciones;
