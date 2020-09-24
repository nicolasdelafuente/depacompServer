import Sequelize from "sequelize";
import { sequelize } from "../database/database";

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

export default Categorias;
