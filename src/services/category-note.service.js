import { CategoryNote } from "../models/category-note.model.js";

export class CategoryNoteService {
  static async register(id, category) {
    console.log(category);
    category &&
      category.map(async (cat) => {
        await CategoryNote.create({
          NoteId: id,
          CategoryId: cat.id,
        });
      });

    return true;
  }
  static async deleteNoteCategories(id) {
    await CategoryNote.destroy({
      where: {
        NoteId: id,
      },
    });

    return true;
  }

  static async updateNoteCategories(id, category) {
    const delet = await this.deleteNoteCategories(id);
    if (delet) {
      const res = await this.register(id, category);
      return res;
    }

    return false;
  }
}
