const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db");

class Categoria extends Model {}
Categoria.init(
  {
    categoria_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    categoria_tipo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "categorias",
    timestamps: false,
  }
);

module.exports = Categoria;
