import Sequelize from "sequelize";
export const sequelize = new Sequelize(
  "proyectsdb",
  "postgres",
  "mysecretpassword",
  {
    host: "localhost",
    dialect: "postgres",
  }
);
