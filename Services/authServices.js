import { RegisterModel } from "../Models/registerModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Registration Service
export const registrationService = async (name, email, password) => {
  try {
    // Check if user already exists
    const existingUser = await RegisterModel.findOne({ email });
    if (existingUser) {
      throw new Error("Email already in use. Please login.");
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Save the user
    const newUser = new RegisterModel({
      name,
      email,
      password: hashedPassword,
    });
    await newUser.save();

    return { message: "User registered successfully." };
  } catch (error) {
    throw new Error(`Failed to register user: ${error.message}`);
  }
};

// Login Service
export const loginService = async (email, password) => {
  try {
    // Find the user
    const user = await RegisterModel.findOne({ email });
    if (!user) {
      throw new Error("User not found. Please register.");
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("Incorrect password.");
    }

    // Generate JWT
    const token = jwt.sign(
      {
        userId: user._id,
        email: user.email,
        name: user.name,
      },
      process.env.JWT_SECRET || "ZoroInnovations",
      { expiresIn: "7d" }
    );

    return {
      message: "Login successful.",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    };
  } catch (error) {
    throw new Error(`User login failed: ${error.message}`);
  }
};
