import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "noteapp-db",
  "1vgbbvjaj2kk9p288yqk",
  "pscale_pw_FyifY5aDb8rnsOy5dhmHKUsTYYIBgs7TGlK9fa9tjwZ",
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
