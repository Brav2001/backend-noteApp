import { Router } from "express";
import { NoteController } from "../controllers/note.controller.js";

const noteRouter = Router();

noteRouter.post("/register", NoteController.register);
noteRouter.get("/all", NoteController.getAll);
noteRouter.get("/archivedFalse/:id", NoteController.archivedFalse);
noteRouter.get("/archivedTrue/:id", NoteController.archivedTrue);
noteRouter.patch("/", NoteController.updateNote);
noteRouter.put("/:id", NoteController.deleteNote);

export default noteRouter;
