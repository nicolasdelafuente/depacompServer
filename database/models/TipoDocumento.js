const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db");

class TipoDocumento extends Model {}
TipoDocumento.init(
  {
    documento_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    documento_tipo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "tipos_documentos",
    timestamps: false,
  }
);

module.exports = TipoDocumento;
