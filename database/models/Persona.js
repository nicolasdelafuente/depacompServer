const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db");

class Persona extends Model {}
Persona.init(
  {
    persona_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    carrera_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    persona_documento: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    documento_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    persona_nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    persona_celular: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    persona_tel_particular: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    persona_email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "personas",
    timestamps: false,
  }
);

module.exports = Persona;
