import Sequelize from "sequelize";
import { sequelize } from "../database/database";

import Seguimientos from "./Seguimientos";

const Orientadores = sequelize.define(
  "orientadores",
  {
    orientador_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    orientador_nombre: {
      type: Sequelize.TEXT,
    },
    orientador_email: {
      type: Sequelize.TEXT,
    },
    orientador_password: {
      type: Sequelize.TEXT,
    },
  },
  { timestamps: false }
);

Orientadores.hasMany(Seguimientos, {
  foreingKey: "orientador_id",
  sourceKey: "orientador_id",
});
Seguimientos.belongsTo(Orientadores, {
  foreingKey: "orientador_id",
  sourceKey: "orientador_id",
});

export default Orientadores;
