const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db");

class Carrera extends Model {}
Carrera.init(
  {
    carrera_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    carrera_nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    carrera_departamento: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    carrera_director: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "carreras",
    timestamps: false,
  }
);

module.exports = Carrera;
