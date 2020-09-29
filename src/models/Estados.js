import Sequelize from "sequelize";
import { sequelize } from "../database/database";

import Seguimientos from "./Seguimientos";

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

Estados.hasMany(Seguimientos, {
  foreingKey: "estado_id",
  sourceKey: "estado_id",
});
Seguimientos.belongsTo(Estados, {
  foreingKey: "estado_id",
  sourceKey: "estado_id",
});

export default Estados;
