import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Note title is required."],
      trim: true,
    },
    content: {
      type: String,
      required: [true, "Note content is required."],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Registration",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const NoteModel = mongoose.model("Note", noteSchema);
