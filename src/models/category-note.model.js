import sequelize from "../utils/config-mysql.js";
import { Model } from "sequelize";
import { Note } from "./note.model.js";
import { Category } from "./category.model.js";

export class CategoryNote extends Model {}

CategoryNote.init(
  {},
  {
    sequelize,
    modelName: "CategoryNote",
  }
);

Note.hasMany(CategoryNote, { constraints: false });
CategoryNote.belongsTo(Note, { constraints: false });

Category.hasMany(CategoryNote, { constraints: false });
CategoryNote.belongsTo(Category, { constraints: false });
