import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const Carreras = sequelize.define(
  "carreras",
  {
    carrera_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    carrera_nombre: {
      type: Sequelize.TEXT,
    },
    carrera_departamento: {
      type: Sequelize.TEXT,
    },
    carrera_director: {
      type: Sequelize.TEXT,
    },
  },
  { timestamps: false }
);

export default Carreras;
