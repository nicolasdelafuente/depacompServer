import Sequelize from "sequelize";
import { sequelize } from "../database/database";

import Personas from "./Personas";

const Tipos_documentos = sequelize.define(
  "tipos_documentos",
  {
    documento_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    documento_tipo: {
      type: Sequelize.TEXT,
    },
  },
  { timestamps: false }
);

Tipos_documentos.hasMany(Personas, {
  foreingKey: "documento_id",
  sourceKey: "documento_id",
});
Personas.belongsTo(Tipos_documentos, {
  foreingKey: "documento_id",
  sourceKey: "documento_id",
});

export default Tipos_documentos;
