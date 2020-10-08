const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db");

class Entrevista extends Model {}
Entrevista.init(
  {
    entrevista_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    seguimiento_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    entrevista_fecha_hora: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    entrevista_observaciones: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    entrevista_acciones: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },

  {
    sequelize,
    modelName: "entrevistas",
    timestamps: false,
  }
);

module.exports = Entrevista;
