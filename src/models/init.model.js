import { authService } from "../services/auth.service.js";
import { CategoryService } from "../services/category.service.js";
import { User } from "./auth.model.js";
import { CategoryNote } from "./category-note.model.js";
import { Category } from "./category.model.js";
import { Note } from "./note.model.js";

export const initORM = async () => {
  await User.sync({ alter: true });
  await Note.sync({ alter: true });
  await Category.sync({ alter: true });
  await CategoryNote.sync({ alter: true });
  CategoryService.createCategories();
  authService.defaultUser();
};
