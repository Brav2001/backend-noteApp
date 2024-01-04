import { Router } from "express";
import { CategoryNoteController } from "../controllers/category-note.controller.js";

const categoryNoteRouter = Router();

categoryNoteRouter.post("/register", CategoryNoteController.register);
categoryNoteRouter.put("/update", CategoryNoteController.update);
categoryNoteRouter.delete("/delete", CategoryNoteController.delete);

export default categoryNoteRouter;
