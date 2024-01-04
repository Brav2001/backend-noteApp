import { CategoryNoteService } from "../services/category-note.service.js";

export class CategoryNoteController {
  static async register(req, res) {
    const response = await CategoryNoteService.register(
      req.body.id,
      req.body.categories
    );

    if (response) {
      return res.status(201).json(response);
    }

    return res.status(500);
  }
  static async update(req, res) {
    const response = await CategoryNoteService.updateNoteCategories(
      req.body.id,
      req.body.categories
    );
    if (response) {
      return res.status(200).json(response);
    }

    return res.status(500);
  }
  static async delete(req, res) {
    const response = await CategoryNoteService.deleteNoteCategories(
      req.body.id
    );
    if (response) {
      return res.status(200).json(response);
    }

    return res.status(500);
  }
}
