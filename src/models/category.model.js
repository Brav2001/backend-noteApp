import sequelize from "../utils/config-mysql.js";
import { DataTypes, Model } from "sequelize";

export class Category extends Model {}

Category.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      length: 255,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    modelName: "Category",
  }
);
