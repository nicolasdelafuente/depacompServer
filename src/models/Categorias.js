import Sequelize from "sequelize";
import { sequelize } from "../database/database";

import Seguimientos from "./Seguimientos";

const Categorias = sequelize.define(
  "categorias",
  {
    categoria_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    categoria_tipo: {
      type: Sequelize.TEXT,
    },
  },
  { timestamps: false }
);

Categorias.hasMany(Seguimientos, {
  foreingKey: "categoria_id",
  sourceKey: "categoria_id",
});
Seguimientos.belongsTo(Categorias, {
  foreingKey: "categoria_id",
  sourceKey: "categoria_id",
});

export default Categorias;
