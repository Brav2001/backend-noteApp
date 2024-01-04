import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "noteapp-db",
  process.env.DATABASE_USERNAME,
  process.env.DATABASE_PASSWORD,
  {
    host: "us-east.connect.psdb.cloud",
    dialect: "mysql",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
);

export default sequelize;
