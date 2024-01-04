import { CategoryService } from "../services/category.service.js";

export class CategoryController {
  static async getAll(req, res) {
    const response = await CategoryService.getAll();

    if (response) {
      return res.status(200).json(response);
    }

    return res.status(500);
  }
}
