import Sequelize from "sequelize";
import { sequelize } from "../database/database";

import Seguimientos from "./Seguimientos";

const Tipos_seguimientos = sequelize.define(
  "tipos_seguimientos",
  {
    tipo_seguimiento_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    tipo_seguimiento_tipo: {
      type: Sequelize.TEXT,
    },
  },
  { timestamps: false }
);

Tipos_seguimientos.hasMany(Seguimientos, {
  foreingKey: "tipo_seguimiento_id",
  sourceKey: "tipo_seguimiento_id",
});
Seguimientos.belongsTo(Tipos_seguimientos, {
  foreingKey: "tipo_seguimiento_id",
  sourceKey: "tipo_seguimiento_id",
});

export default Tipos_seguimientos;
