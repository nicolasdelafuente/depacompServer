const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db");

class Estado extends Model {}
Estado.init(
  {
    estado_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    estado_tipo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },

  {
    sequelize,
    modelName: "estados",
    timestamps: false,
  }
);

module.exports = Estado;
