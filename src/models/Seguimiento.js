import Sequelize from "sequelize";
import { sequelize } from "../database/database"; //Conexión

const Seguimiento = sequelize.define(
  "seguimientos",
  {
    id: { type: Sequelize.INTEGER, primaryKey: true },
    fecha: { type: Sequelize.DATE },
    name: { type: Sequelize.TEXT },
    motivo: { type: Sequelize.TEXT },
    estado: { type: Sequelize.TEXT },
    orientador: { type: Sequelize.TEXT },
    color_estado: { type: Sequelize.TEXT },
  },
  { timestamps: false }
);

export default Seguimiento;
