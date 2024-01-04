import sequelize from "../utils/config-mysql.js";
import { DataTypes, Model } from "sequelize";

export class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    userName: {
      type: DataTypes.STRING,
      length: 64,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      length: 255,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "User",
  }
);
