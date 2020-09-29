import Sequelize from "sequelize";
import { sequelize } from "../database/database";

import Seguimientos from "./Seguimientos";

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

Derivadores.hasMany(Seguimientos, {
  foreingKey: "derivador_id",
  sourceKey: "derivador_id",
});
Seguimientos.belongsTo(Derivadores, {
  foreingKey: "derivador_id",
  sourceKey: "derivador_id",
});

export default Derivadores;
