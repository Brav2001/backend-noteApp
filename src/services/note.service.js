import { CategoryNote } from "../models/category-note.model.js";
import { Category } from "../models/category.model.js";
import { Note } from "../models/note.model.js";
import { decodeToken } from "../utils/jwt.js";

export class NoteService {
  static async register(note, token) {
    const id = await decodeToken(token);

    const createdNote = await Note.create({
      title: note.title,
      description: note.description,
      archived: note.archived,
      UserId: id,
    });

    return createdNote;
  }
  static async getAll(token) {
    const id = await decodeToken(token);
    const notes = await Note.findAll({
      where: {
        UserId: id,
      },
      include: [
        {
          model: CategoryNote,
          include: [
            {
              model: Category,
              attributes: ["id", "name"],
            },
          ],
        },
      ],
    });

    return notes;
  }
  static async updateArchived(archived, id) {
    await Note.update(
      { archived: archived },
      {
        where: {
          id: id,
        },
      }
    );

    const note = await Note.findAll({
      where: {
        id: id,
      },
    });

    return note;
  }
  static async updateNote(note) {
    const noteupdate = await Note.update(
      { title: note.title, description: note.description },
      {
        where: {
          id: note.id,
        },
      }
    );

    return noteupdate;
  }
  static async deleteNote(id) {
    await Note.destroy({
      where: {
        id: id,
      },
    });

    const note = await Note.findAll({
      where: {
        id: id,
      },
    });

    return note;
  }
}
