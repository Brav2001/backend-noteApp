import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "noteapp-db",
  "k7u08fcl4j4ndzq6yjuj",
  "pscale_pw_BLQFYJFJW2xIy48IvRs80Y5ROxKvWJAUcKXvJIrucam",
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
