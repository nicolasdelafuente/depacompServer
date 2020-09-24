import Sequelize from "sequelize";
import { sequelize } from "../database/database";

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

export default Tipos_seguimientos;
