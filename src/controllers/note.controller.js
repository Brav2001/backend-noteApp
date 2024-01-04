import { validateNote, validatePartialNote } from "../schemas/note.schema.js";
import { NoteService } from "../services/note.service.js";

export class NoteController {
  static async register(req, res) {
    const result = validateNote(req.body);
    if (result.error) {
      return res
        .status(400)
        .json({ error: JSON.parse(result.error.message), body: req.body });
    }

    const response = await NoteService.register(
      result.data,
      req.header("auth-token")
    );

    if (response.id) {
      return res.status(201).json(response);
    }

    return res.status(500);
  }
  static async getAll(req, res) {
    const response = await NoteService.getAll(req.header("auth-token"));

    if (response) {
      return res.status(200).json(response);
    }

    return res.status(500);
  }
  static async archivedFalse(req, res) {
    const { id } = req.params;
    const response = await NoteService.updateArchived(false, id);
    if (response) {
      return res.status(200).json(response);
    }
    return res.status(500);
  }
  static async archivedTrue(req, res) {
    const { id } = req.params;
    const response = await NoteService.updateArchived(true, id);
    if (response) {
      return res.status(200).json(response);
    }
    return res.status(500);
  }
  static async updateNote(req, res) {
    const result = validatePartialNote(req.body);

    if (result.error) {
      return res
        .status(400)
        .json({ error: JSON.parse(result.error.message), body: req.body });
    }
    const response = await NoteService.updateNote(req.body);

    if (response) {
      return res.status(200).json(response);
    }

    return res.status(500);
  }
  static async deleteNote(req, res) {
    const { id } = req.params;
    const response = await NoteService.deleteNote(id);
    if (response) {
      return res.status(200).json(response);
    }
    return res.status(500);
  }
}
