import express from "express";
import {
  createNoteController,
  getUserNotesController,
} from "../Controllers/notesController.js";
import { protect } from "../Middlewares/authMiddleware.js";

const notesRouter = express.Router();

notesRouter.use(protect); // protect all note routes

notesRouter
  .route("/notes")
  .post(createNoteController)
  .get(getUserNotesController);

export default notesRouter;
