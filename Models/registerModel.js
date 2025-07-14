import mongoose from "mongoose";

const Register = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minlength: [4, "Name must be at least 4 characters long."],
    maxlength: [50, "Name must be less than 50 characters."],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email address is required."],
    unique: [true, "This email already registered"],
    lowercase: true,
    trim: true,
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  password: {
    type: String,
    required: [true, "Password is required."],
    minlength: [8, "Password must be at least 8 characters long."],
    maxlength: [64, "Password must be less than 64 characters."],
    validate: {
      validator: function (val) {
        // Must contain at least 1 uppercase, 1 lowercase, 1 number, and 1 special character
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(val);
      },
      message:
        "Password must include uppercase, lowercase, number, and special character.",
    },
  },
});

export const RegisterModel = mongoose.model("Registration", Register);
