import { Category } from "../models/category.model.js";

export class CategoryService {
  static async createCategories() {
    const data = [
      "PERSONAL",
      "WORK",
      "SCHOOL",
      "PROJECTS",
      "TRAVEL",
      "FINANCE",
      "HEALTH",
      "IDEAS",
      "INSPIRATION",
      "PLANNING",
      "REMINDERS",
      "SHOPPING",
      "GOALS",
      "EVENTS",
      "BOOKS",
      "MOVIES",
      "MUSIC",
      "TECHNOLOGY",
      "COOKING",
      "EXERCISE",
      "CREATIVITY",
      "PERSONAL DEVELOPMENT",
      "FAMILY",
      "FRIENDS",
      "PLACES",
      "REFLECTIONS",
      "ARTICLES",
      "WEBSITES",
      "TUTORIALS",
      "LEARNING",
    ];

    try {
      data.map(async (category) => {
        await Category.findOrCreate({
          where: {
            name: category,
          },
        });
      });
    } catch (error) {
      console.log(error);
    }
  }
  static async getAll() {
    const result = Category.findAll();

    return result;
  }
}
