const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db");

class SectorDerivacion extends Model {}
SectorDerivacion.init(
  {
    sector_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    sector_nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "sectorderivaciones",
    timestamps: false,
  }
);

module.exports = SectorDerivacion;
