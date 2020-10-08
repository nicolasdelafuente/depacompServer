const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db");

class TipoSeguimiento extends Model {}
TipoSeguimiento.init(
  {
    tipo_seguimiento_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    tipo_seguimiento_tipo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "tipos_seguimientos",
    timestamps: false,
  }
);

module.exports = TipoSeguimiento;
