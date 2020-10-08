const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db");

class Seguimiento extends Model {}
Seguimiento.init(
  {
    seguimiento_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    estado_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    entrevista_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    categoria_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tipo_seguimiento_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    persona_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    orientador_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    derivador_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    seguimiento_motivo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "seguimientos",
    timestamps: false,
  }
);

module.exports = Seguimiento;
