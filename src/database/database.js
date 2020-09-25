import Sequelize from "sequelize";

export const sequelize = new Sequelize("departamento", "postgres", "Adrian1971", {
  host: "localhost",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    require: 30000,
    idle: 10000,
  },
  logging: false,
});
