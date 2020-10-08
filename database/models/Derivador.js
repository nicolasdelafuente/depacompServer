const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db");

class Derivador extends Model {}
Derivador.init(
  {
    derivador_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    sector_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    derivador_nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },

  {
    sequelize,
    modelName: "derivadores",
    timestamps: false,
  }
);

module.exports = Derivador;
