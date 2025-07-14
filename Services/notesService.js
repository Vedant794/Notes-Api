import { NoteModel } from "../Models/notesModel.js";

export const createNoteService = async ({ title, content, userId }) => {
  return await NoteModel.create({ title, content, user: userId });
};

export const getUserNotesService = async (userId) => {
  return await NoteModel.find({ user: userId }).sort({ createdAt: -1 });
};
