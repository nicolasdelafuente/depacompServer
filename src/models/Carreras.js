import Sequelize from "sequelize";
import { sequelize } from "../database/database";

import Personas from "./Personas";

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

//many to many
Carreras.belongsToMany(Personas, { through: "persona_carrera" });
Personas.belongsToMany(Carreras, { through: "persona_carrera" });

export default Carreras;
