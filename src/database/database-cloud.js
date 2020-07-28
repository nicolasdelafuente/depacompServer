import Sequelize from "sequelize";

export const sequelize = new Sequelize(
  "departamento",
  "postgres",
  "Admin2020",
  {
    host: "34.71.29.253",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      require: 30000,
      idle: 10000,
    },
    logging: false,
  }
);
