import sequelize from "../utils/config-mysql.js";
import { DataTypes, Model } from "sequelize";
import { User } from "./auth.model.js";
import { CategoryNote } from "./category-note.model.js";
import { Category } from "./category.model.js";

export class Note extends Model {}

Note.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      length: 255,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      length: 255,
      allowNull: false,
    },
    archived: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Note",
  }
);

Note.belongsTo(User, { constraints: false });
