import Sequelize from "sequelize";
import { sequelize } from "../database/database";

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

export default Tipos_documentos;
