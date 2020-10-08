const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db");

class Orientador extends Model {}
Orientador.init(
  {
    orientador_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    orientador_nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    orientador_email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    orientador_password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },

  {
    sequelize,
    modelName: "orientadores",
    timestamps: false,
  }
);

module.exports = Orientador;
