import {
  createNoteService,
  getUserNotesService,
} from "../Services/notesService.js";

// POST /notes
export const createNoteController = async (req, res) => {
  try {
    const { title, content } = req.body;
    const userId = req.user?.userId;

    if (!title || !content) {
      return res.status(400).json({ error: "Title and content are required." });
    }

    const note = await createNoteService({ title, content, userId });
    return res.status(201).json({ message: "Note created successfully", note });
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.message || "Note creation failed." });
  }
};

// GET /notes
export const getUserNotesController = async (req, res) => {
  try {
    const userId = req.user?.userId;
    const notes = await getUserNotesService(userId);
    return res.status(200).json(notes);
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.message || "Failed to fetch notes." });
  }
};
